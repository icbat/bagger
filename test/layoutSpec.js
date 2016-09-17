describe("padding", function() {
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
