var state_init = function(game) {
    return {
        preload: function() {
            this.assetsLoaded = false;
            game.load.onLoadComplete.add(function() {
                this.assetsLoaded = true;
            }, this);
            game.load.image('monster-crab', 'assets/graphics/monster_13.png');
            // game.load.audio('land', 'assets/sounds/land.ogg');
            // game.load.audio('jump', 'assets/sounds/jump.ogg');
            // game.load.audio('lose', 'assets/sounds/lose.ogg');
            // game.load.audio('score', 'assets/sounds/score.ogg');
            // game.load.audio('milestone', 'assets/sounds/upmid.ogg');
            // game.load.bitmapFont('titleOrange', 'assets/fonts/upheavalPro-orange.png', 'assets/fonts/upheavalPro.xml');
            // game.load.bitmapFont('titlePurple', 'assets/fonts/upheavalPro-purple.png', 'assets/fonts/upheavalPro.xml');

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
