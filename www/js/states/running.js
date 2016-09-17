var state_running = function(game) {
    return {
        create: function(game) {
            var sky = game.add.sprite(0, -100, 'pixel');
            sky.scale.setTo(game.world.width, layout.fourthOfScreen(game));
            sky.tint = Phaser.Color.hexToRGB(colors.blue);

            var bottom = game.add.sprite(0, layout.fourthOfScreen(game) * 3, 'pixel');
            bottom.scale.setTo(game.world.width, layout.fourthOfScreen(game) + 100);
            bottom.tint = Phaser.Color.hexToRGB(colors.sand);

            // SUPER inefficient, probably.
            // TODO Profile this vs one giant texture
            // TODO also try sprite batch
            for (i = 0; i * 70 < game.world.width; ++i) {
                game.add.sprite(i * 70, layout.fourthOfScreen(game) - 105, 'ground-middle');
            }

            var playerHeight = layout.fourthOfScreen(game) - 64;

            var player = game.add.sprite(game.world.width * layout.playerXCoefficient, playerHeight, 'player');
            player.scale.setTo(4, 4);
            player.anchor.setTo(0.5, 1);

            var monster = monsterFactory.createMonster(game.world.width * layout.monsterXCoefficient, playerHeight);

            layout.addBagSlots(game);
        }
    };
};

game.state.add('running', state_running);
