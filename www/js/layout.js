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
    addBagSlots: function(game) {
        for (i = 0; i < 9; ++i) {
            var slotSize = layout.findSlotSize(game.world.width, layout.fourthOfScreen(game) * 2, layout.bagSlotPadding);
            var xPadding = layout.findPadding(game.world.width, slotSize, layout.bagSlotPadding);
            var yPadding = layout.findPadding(layout.fourthOfScreen(game) * 2, slotSize, layout.bagSlotPadding);
            var x = xPadding + (i % 3) * (slotSize + layout.bagSlotPadding);
            var y = yPadding + (Math.floor(i / 3) * (slotSize + layout.bagSlotPadding));
            var slot = game.add.sprite(x, layout.fourthOfScreen(game) + y, 'pixel');
            slot.scale.setTo(slotSize, slotSize);
            slot.tint = Phaser.Color.hexToRGB(colors.bagSlots);
        }
    }
};
