var gulp = require('gulp');
var gutil = require('gulp-util');

var bower_components = [
  "bower_components/phaser/build/phaser.min.js"
];

gulp.task('default',['copy-bower'], function() {});

gulp.task('copy-bower', function() {
  return gulp
    .src(bower_components)
    .pipe(gulp.dest('./www/scripts/vendor/'));
});
