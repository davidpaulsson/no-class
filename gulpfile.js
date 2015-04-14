'use strict';

/* global require */

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var autoprefixer = require('gulp-autoprefixer');

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function () {
  gulp.src('app/scss/**/*.scss')
    .pipe(sass({
      includePaths: ['app/scss']
    }))
    .pipe(autoprefixer())
    .pipe(gulp.dest('app/css'));
});

// Static Server + watching scss/html files
gulp.task('browser-sync', function () {
  browserSync.init(['app/css/*.css'], {
    server: {
      baseDir: './app'
    }
  });
});

gulp.task('default', ['sass', 'browser-sync'], function () {
  gulp.watch('app/scss/**/*.scss', ['sass']);
});
