var state_running = function(game) {
    return {
        create: function(game) {
            var fourthOfScreen = game.world.height / 4;

            var sky = game.add.sprite(0, -100, 'pixel');
            sky.scale.setTo(game.world.width, fourthOfScreen);
            sky.tint = Phaser.Color.hexToRGB(colors.blue);

            var bottom = game.add.sprite(0, fourthOfScreen * 3, 'pixel');
            bottom.scale.setTo(game.world.width, fourthOfScreen + 100);
            bottom.tint = Phaser.Color.hexToRGB(colors.sand);

            // SUPER inefficient, probably.
            // TODO Profile this vs one giant texture
            // TODO also try sprite batch
            for (i = 0; i * 70 < game.world.width; ++i) {
                game.add.sprite(i * 70, fourthOfScreen - 105, 'ground-middle');
            }

            var playerHeight = fourthOfScreen - 64;

            var player = game.add.sprite(game.world.width * constants.playerXCoefficient, playerHeight, 'player');
            player.scale.setTo(4, 4);
            player.anchor.setTo(0.5, 1);

            var monster = monsterFactory.createMonster(game.world.width * constants.monsterXCoefficient, playerHeight);
        }
    };
};

game.state.add('running', state_running);
