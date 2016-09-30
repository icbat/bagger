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
            var monster = monsterFactory.createMonster(game.world.width * layout.monsterXCoefficient, playerHeight);
            monster.deathSignal.add(function() {
                game.add.sprite(0, 0, monster.lootKey);
            });
        }
    };
};

game.state.add('running', state_running);
