var state_running = function(game) {
    return {
        create: function(game) {
            layout.makeSky(game);
            layout.makeGround(game);
            layout.makeBottomBox(game);
            var slots = layout.addBagSlots(game);
            var bag = makeBag(slots);

            var playerHeight = layout.fourthOfScreen(game) - 64;
            var player = game.add.sprite(game.world.width * layout.playerXCoefficient, playerHeight, 'player');
            player.scale.setTo(4, 4);
            player.anchor.setTo(0.5, 1);

            monsterFactory.lootCallback = function() {
                var sprite = game.add.sprite(0, 0, monster.lootKey);
                bag.store(sprite);
            };

            var monster = monsterFactory.createMonster(game.world.width * layout.monsterXCoefficient, playerHeight);
        }
    };
};

game.state.add('running', state_running);
