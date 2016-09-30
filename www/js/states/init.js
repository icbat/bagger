var state_init = function(game) {
    return {
        preload: function() {
            this.assetsLoaded = false;
            game.load.onLoadComplete.add(function() {
                this.assetsLoaded = true;
            }, this);
            // TODO for the love of all that is holy, pack this into a sheet
            // var monsters = ["03", "04", "05", "06", "07", "10", "13", "14", "15", "16", "17", "20", "23", "24", "25", "26", "27", "30", "34", "35", "36", "37", "38", "44", "45", "46", "47", "48", "54", "55", "56", "57", "58", "62", "63", "72", "73", "82", "83"];
            var monsters = ["03", "04", "05"];
            for (i = 0; i < monsters.length; ++i) {
                game.load.spritesheet('monster-' + i, 'assets/graphics/monsters/monster_' + monsters[i] + '.png', 16, 16);
            }
            constants.totalMonsters = i;
            game.load.image('player', 'assets/graphics/player_82.png');
            game.load.image('pixel', 'assets/graphics/pixel.png');
            game.load.image('drop-heart', 'assets/graphics/drops/shieldGold.png');
            game.load.image('ground-middle', 'assets/graphics/ground-middle.png');

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
