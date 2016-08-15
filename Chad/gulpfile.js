var gulp       = require('gulp');
var webserver  = require('gulp-webserver');
var watch      = require('gulp-watch');
var stylus     = require('gulp-stylus');
var coffee     = require('gulp-coffee');
var jade       = require('gulp-jade');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('watch', function() {
  watch('src/stylus/**/*.styl', function () {
    gulp.src('src/stylus/**/*.styl')
      .pipe(sourcemaps.init())
      .pipe(stylus())
      .pipe(sourcemaps.write('./maps'))
      .pipe(gulp.dest('build/css'));
  });

  watch('src/**/*.coffee', function () {
    gulp.src('src/**/*.coffee')
      .pipe(sourcemaps.init())
      .pipe(coffee())
      .pipe(sourcemaps.write('./maps'))
      .pipe(gulp.dest('build/js'));
  });

  watch('src/jade/**/*.jade', function () {
    gulp.src('src/jade/**/*.jade')
      .pipe(sourcemaps.init())
      .pipe(jade())
      .pipe(sourcemaps.write('./maps'))
      .pipe(gulp.dest('build'));
  });
});

gulp.task('webserver', function() {
  gulp.src('build')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

gulp.task('default', ['watch', 'webserver']);