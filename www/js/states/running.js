var state_running = function(game) {
    return {
        create: function(game) {
            var upperScreenBottom = game.world.height / 4;
            var sky = game.add.sprite(0, 0, 'pixel');
            sky.scale.setTo(game.world.width, upperScreenBottom);
            sky.tint = Phaser.Color.hexToRGB(colors.blue);

            var crab = game.add.sprite(game.world.width - (64 * 4), upperScreenBottom - 32, 'monster-crab');
            crab.scale.setTo(4, 4);
            crab.anchor.setTo(0.5, 1);
            crab.animations.add('walk');
            crab.animations.play('walk', 2, true);

            var player = game.add.sprite((64 * 4), upperScreenBottom - 32, 'player');
            player.scale.setTo(4, 4);
            player.anchor.setTo(0.5, 1);

        }
    };
};

game.state.add('running', state_running);
