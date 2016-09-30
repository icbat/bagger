var layout = {
    playerXCoefficient: 1 / 5,
    monsterXCoefficient: 4 / 5,
    minPadding: 15,
    findPadding: function(widthOrHeight, slotSize, paddingBetweenSlots) {
        return (widthOrHeight - (slotSize * 3) - (paddingBetweenSlots * 3)) / 2;
    },
    findSlotSize: function(width, height, paddingBetweenSlots) {
        var smallestSide = Math.min(height, width);
        var slotSize = (smallestSide - (5 * paddingBetweenSlots)) / 3;
        return slotSize;
    },
    fourthOfScreen: function(game) {
        return game.world.height / 4;
    },
    makeGround: function(game) {
        // SUPER inefficient, probably.
        // TODO Profile this vs one giant texture
        // TODO also try sprite batch
        var widthOfGroundSprite = 70;
        var heightOfGroundSprite = 105;
        for (i = 0; i * widthOfGroundSprite < game.world.width; ++i) {
            game.add.sprite(i * widthOfGroundSprite, layout.fourthOfScreen(game) - heightOfGroundSprite, 'ground-middle');
        }
    },
    makeSky: function(game) {
        var sky = game.add.sprite(0, -100, 'pixel');
        sky.scale.setTo(game.world.width, layout.fourthOfScreen(game));
        sky.tint = Phaser.Color.hexToRGB(colors.blue);
    },
    makeChargeBar: function(game) {
        var xPadding = this.minPadding;
        var yPadding = this.minPadding;
        var width = game.world.width - xPadding * 2;
        var height = this.minPadding;

        var y = yPadding + (this.fourthOfScreen(game));
        var chargeBar = game.add.sprite(xPadding, y, 'pixel');
        chargeBar.scale.setTo(5, height);
        chargeBar.tint = Phaser.Color.hexToRGB(colors.sand);
        var growingTween = game.add.tween(chargeBar.scale).to({
                x: width,
                y: height
            },
            constants.attackChargeTime,
            // 1,
            Phaser.Easing.Linear.None, true);
        growingTween.onComplete.add(function() {
            button.inputEnabled = true;
            button.tint = Phaser.Color.hexToRGB(colors.sand);
        });
        var callback = function() {
            chargeBar.scale.setTo(5, height);
            growingTween.start();
            button.inputEnabled = false;
            button.tint = Phaser.Color.hexToRGB(colors.disabledButton);
        };
        var button = game.add.button(xPadding, yPadding + height + y, 'pixel', callback);
        button.height = this.minPadding * 4;
        button.width = width;

        callback();

    }
};
