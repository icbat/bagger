var state_running = function(game) {
    return {
        create: function(game) {
            var crab = game.add.sprite(game.world.centerX + 64, game.world.height / 4 - 32, 'monster-crab');
            crab.scale.setTo(4, 4);
        },

        update: function(game) {

        },

        render: function() {

        },
    };
};

game.state.add('running', state_running);
