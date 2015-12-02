/* global require */

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function () {
  gulp.src('app/scss/**/*.scss')
    .pipe(sass({
      includePaths: ['app/scss'],
      outputStyle: 'expanded'
    }))
    .pipe(autoprefixer())
    .pipe(gulp.dest('dist/css'))
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(autoprefixer())
    .pipe(rename('no-class.min.css'))
    .pipe(gulp.dest('dist/css'));
});

// Static Server + watching scss/html files
gulp.task('html', function () {
  gulp.src('app/*.html')
    .pipe(gulp.dest('dist'));
});

// Static Server + watching scss/html files
gulp.task('browser-sync', function () {
  browserSync.init(['dist/css/*.css', 'dist/*.html'], {
    server: {
      baseDir: './dist'
    }
  });
});

gulp.task('default', ['html', 'sass', 'browser-sync'], function () {
  gulp.watch('app/scss/**/*.scss', ['sass']);
  gulp.watch('app/**/*.html', ['html']);
});

gulp.task('build', ['html', 'sass']);
