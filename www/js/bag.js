var makeBag = function(slots) {
    return {
        slots: slots,
        hasOpenSlots: function() {
            var i;
            for (i = 0; i < slots.length; ++i) {
                var slot = this.slots[i];
                if (!slot.contents) {
                    return true;
                }
            }
            return false;
        },
        store: function(given) {
            var i;
            for (i = 0; i < slots.length; ++i) {
                var slot = this.slots[i];
                if (!slot.contents) {
                    slot.contents = given;
                    given.x = slot.x;
                    given.y = slot.y;
                    break;
                }
            }
        }
    };
};
