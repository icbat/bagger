var gulp = require('gulp');

gulp.task('default', ['copy-bower', 'copy-graphics'], function() {});

var bower_components = [
    'bower_components/phaser/build/phaser.min.js'
];

gulp.task('copy-bower', function() {
    return gulp
        .src(bower_components)
        .pipe(gulp.dest('./www/js/vendor/'));
});

gulp.task('copy-graphics', function() {
    return gulp
        .src(['assets/browser/favicon.png', 'assets/graphics/**/*'])
        .pipe(gulp.dest('./www/assets/graphics'));
});
