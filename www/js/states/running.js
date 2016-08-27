var state_running = function(game) {
    return {
        create: function(game) {
            var upperScreenBottom = game.world.height / 4;
            var sky = game.add.sprite(0, 0, 'pixel');
            sky.scale.setTo(game.world.width, upperScreenBottom);
            sky.tint = Phaser.Color.hexToRGB(colors.blue);

            // SUPER inefficient, probably. TODO : Profile this vs one giant texture
            // TODO also try sprite batch
            for (i = 0; i * 70 < game.world.width; ++i) {
                game.add.sprite(i * 70, upperScreenBottom - 105, 'ground-middle');
            }

            var playerHeight = upperScreenBottom - 64;

            var player = game.add.sprite(game.world.width / 5, playerHeight, 'player');
            player.scale.setTo(4, 4);
            player.anchor.setTo(0.5, 1);

            var bottom = game.add.sprite(0, upperScreenBottom * 3, 'pixel');
            bottom.scale.setTo(game.world.width, upperScreenBottom);
            bottom.tint = Phaser.Color.hexToRGB(colors.sand);

            monsterFactory.createMonster(game.world.width / 5 * 4, playerHeight);
        }
    };
};

game.state.add('running', state_running);
