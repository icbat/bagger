var state_running = function(game) {
    return {
        create: function(game) {
            var upperScreenBottom = game.world.height / 4;
            var sky = game.add.sprite(0, 0, 'pixel');
            sky.scale.setTo(game.world.width, upperScreenBottom);
            sky.tint = Phaser.Color.hexToRGB(colors.blue);

            // SUPER inefficient, probably. TODO : Profile this vs one giant texture
            for (i = 0; i * 70 < game.world.width; ++i) {
                game.add.sprite(i * 70, upperScreenBottom - 105, 'ground-middle');
            }

            var playerHeight = 64;
            var crab = game.add.sprite(game.world.width - (64 * 4), upperScreenBottom - playerHeight, 'monster-crab');
            crab.scale.setTo(4, 4);
            crab.anchor.setTo(0.5, 1);
            crab.animations.add('walk');
            crab.animations.play('walk', 2, true);

            var player = game.add.sprite((64 * 4), upperScreenBottom - playerHeight, 'player');
            player.scale.setTo(4, 4);
            player.anchor.setTo(0.5, 1);

            var bottom = game.add.sprite(0, upperScreenBottom * 3, 'pixel');
            bottom.scale.setTo(game.world.width, upperScreenBottom);
            bottom.tint = Phaser.Color.hexToRGB(colors.sand);
        }
    };
};

game.state.add('running', state_running);
