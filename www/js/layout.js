var layout = {
    playerXCoefficient: 1 / 5,
    monsterXCoefficient: 4 / 5,
    bagSlotPadding: 15,
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
    makeBottomBox: function(game) {
        var bottom = game.add.sprite(0, layout.fourthOfScreen(game) * 3, 'pixel');
        bottom.scale.setTo(game.world.width, layout.fourthOfScreen(game) + 100);
        bottom.tint = Phaser.Color.hexToRGB(colors.sand);
    },
    makeChargeBar: function(game) {
        var xPadding = this.bagSlotPadding;
        var yPadding = this.bagSlotPadding;
        var width = game.world.width - xPadding * 2;
        var height = this.bagSlotPadding * 2;
        var backgroundFrame = game.add.sprite(xPadding, yPadding + (3 * this.fourthOfScreen(game)), 'pixel');
        backgroundFrame.maxWidth = width;
        backgroundFrame.minWidth = 5;
        backgroundFrame.scale.setTo(backgroundFrame.minWidth, height);
        backgroundFrame.tint = Phaser.Color.hexToRGB(colors.barBackground);
        game.add.tween(backgroundFrame.scale).to({
            x: width,
            y: height
        }, constants.attackChargeTime, Phaser.Easing.Linear.None, true);
    }
};
