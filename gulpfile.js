var gulp = require('gulp'),
    sass = require('gulp-sass'),
    uglifycss = require('gulp-uglifycss'),
    autoprefixer = require('gulp-autoprefixer'),
    webpack = require('webpack'),
    browserSync = require('browser-sync').create();

function scripts(callback) {
  webpack(require('./webpack.config.js'), function(err, stats) {
    if (err) {
      console.log(err.toString());
    }

    console.log(stats.toString());
    callback();
  });
}

function styles() {
  return gulp.src('./app/assets/scss/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(uglifycss())
    .pipe(gulp.dest('./app/temp/css'));
}

function watch() {
  browserSync.init({
    notify: false,
    server: {
      baseDir: "app"
    }
  });

  gulp.watch('./app/assets/scss/**/*.scss', styles);
  gulp.watch('./app/assets/js/**/*.js', scripts)

}

gulp.task('watch', gulp.series(watch, gulp.parallel(styles,scripts)));
