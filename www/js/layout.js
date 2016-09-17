var layout = {
    playerXCoefficient: 1 / 5,
    monsterXCoefficient: 4 / 5,
    bagSlotPadding: 15,
    findPadding: function(widthOrHeight, slotSize, paddingBetweenSlots) {
        return (widthOrHeight - (slotSize * 3) - (paddingBetweenSlots * 3)) / 2;
    }
};
