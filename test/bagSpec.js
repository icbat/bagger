describe("filling bag", function() {
    it("should accept items", function() {
        var slots = [{
            x: 0,
            y: 0
        }];
        var bag = makeBag(slots);
        var expected = 'widget';

        bag.accept(expected);

        expect(bag.slots[0].contents).toBe(expected);
    });

    it("should choose the first open slot", function() {
        var slots = [{
            x: 0,
            y: 0,
            contents: 'old and busted'
        }, {
            x: 0,
            y: 0
        }, {
            x: 0,
            y: 0
        }];

        var bag = makeBag(slots);
        var expected = 'new hotness';

        bag.accept(expected);

        expect(bag.slots[1].contents).toBe(expected);
        expect(bag.slots[2].contents).toBeUndefined();
    });

    it("should do nothing if there's no open slots", function() {
        var slots = [{
            x: 0,
            y: 0,
            contents: 'thing 1'
        }, {
            x: 0,
            y: 0,
            contents: 'thing 2'
        }];

        var bag = makeBag(slots);
        var expected = 'already overburdened';

        bag.accept(expected);

        expect(bag.slots[0].contents).not.toBe(expected);
        expect(bag.slots[1].contents).not.toBe(expected);
    });

    it("should move items to the slots X and Y", function() {
        var expectedX = Math.random();
        var expectedY = Math.random();
        var slots = [{
            x: expectedX,
            y: expectedY
        }];
        var bag = makeBag(slots);

        bag.accept({x:0, y:0});

        var actual = bag.slots[0].contents;
        expect(actual.x).toBe(expectedX);
        expect(actual.y).toBe(expectedY);
    });

// TODO I'm assuming I need one for scaling the items....

    // TODO write this test once we actually take stuff out of the bag
    // it("should reuse slots if able", function() {
    //     var slots = [{
    //         x: 0,
    //         y: 0,
    //         contents: 'thing'
    //     }, {
    //         x: 0,
    //         y: 0,
    //         contents: null
    //     }];
    //
    //     var bag = makeBag(slots);
    // });
});
