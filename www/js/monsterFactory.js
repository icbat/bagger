var monsterFactory = {
    createMonster: function(x, y) {        
        var monster = game.add.sprite(x, -16, 'monster-' + random.integerInRange(0, constants.totalMonsters - 1));
        monster.scale.setTo(4, 4);
        monster.anchor.setTo(0.5, 1);
        monster.animations.add('walk');
        monster.animations.play('walk', 2, true);

        monster.die = function() {
            var tween = game.add.tween(this).to({
                alpha: 0,
                rotation: 20
            }, constants.monsterDeathAnimationTime, Phaser.Easing.Linear.None, true);
            game.add.tween(this.scale).to({
                x: 0, y:0
            }, constants.monsterDeathAnimationTime, Phaser.Easing.Linear.None, true);
            tween.onComplete.add(function() {
                // TODO consider using kill and having this factory draw from an object pool
                // If you do, remember that the game looks for onDestroy right now, that needs to be updated too
                this.destroy();
            }, this);
        };

        var dropIn = game.add.tween(monster).to({
            y: y,
        }, 500, Phaser.Easing.Exponential.In, true);
        dropIn.onComplete.add(function() {
            game.camera.shake(0.01, 100, true, Phaser.Camera.SHAKE_VERTICAL);
        });

        monster.events.onDestroy.add(function() {
            this.createMonster(x, y);
        }, this);
        game.time.events.add(constants.monsterLifespan, monster.die, monster);

        return monster;
    }
};
