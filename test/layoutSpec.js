describe("layout's", function() {
    describe("findPadding", function() {
        it("should be half the remaining size", function() {
            var screenWidth = 100;
            var expected = screenWidth / 2;
            expect(layout.findPadding(screenWidth, 0, 0)).toBe(expected);
        });

        it("should account for bag slots", function() {
            var screenWidth = 100;
            var slotSize = 10;
            var expected = (screenWidth - (slotSize * 3)) / 2;
            expect(layout.findPadding(screenWidth, slotSize, 0)).toBe(expected);
        });

        it("should account for padding between slots", function() {
            var screenWidth = 100;
            var padding = 10;
            var expected = (screenWidth - (padding * 3)) / 2;
            expect(layout.findPadding(screenWidth, 0, padding)).toBe(expected);
        });
    });

    describe("findSlotSize", function() {
        it("should be 1/3 of the size when there's no padding", function() {
            var size = 66;
            expect(layout.findSlotSize(size, size, 0)).toBe(size / 3);
        });

        it("should use the smallest side for calculation", function() {
            var smallestSize = 66;
            var size = 100;
            expect(layout.findSlotSize(smallestSize, size, 0)).toBe(smallestSize / 3);
            expect(layout.findSlotSize(size, smallestSize, 0)).toBe(smallestSize / 3);
        });

        it("should leave room for padding", function() {
            var padding = 10;
            var size = 66 + (5 * padding);
            expect(layout.findSlotSize(size, size, padding)).toBe(22);
            expect(layout.findSlotSize(size, size, padding)).toBe(22);
        });
    });

});
