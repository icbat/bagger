var monsterFactory = {
    createMonster: function(x, y) {
        var monster = game.add.sprite(x, y, 'monster-crab');
        monster.scale.setTo(4, 4);
        monster.anchor.setTo(0.5, 1);
        monster.animations.add('walk');
        monster.animations.play('walk', 2, true);

        return monster;
    }
};
