var state_init = function(game) {
    return {
        preload: function() {
            this.assetsLoaded = false;
            game.load.onLoadComplete.add(function() {
                this.assetsLoaded = true;
            }, this);
            game.load.spritesheet('monster-crab', 'assets/graphics/monster_07.png', 16, 16);
            game.load.image('player', 'assets/graphics/player_82.png');
            game.load.image('pixel', 'assets/graphics/pixel.png');

            game.stage.backgroundColor = colors.brown;
        },

        update: function() {
            if (this.assetsLoaded) {
                game.state.start('running');
            }
        }
    };
};

game.state.add('init', state_init);
