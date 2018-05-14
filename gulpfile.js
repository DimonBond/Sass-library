'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const newer = require('gulp-newer');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const clean = require('gulp-clean');

gulp.task('sass', function () {
  return gulp.src('sass/**/*.sass')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest('dist/css'))
});

gulp.task('assets', function () {
  return gulp.src('assets/**/*.{png,svg}')
    .pipe(newer('dist'))
    .pipe(gulp.dest('dist'))
});

gulp.task('js', function () {
  return gulp.src('js/**/*.js')
    .pipe(concat('app.js'))
    .pipe(gulp.dest('dist/js'))
});

gulp.task('clean', function() {
  return gulp.src('dist/**/')
    .pipe(clean())
});

gulp.task('build', gulp.series('clean', gulp.parallel('sass', 'assets', 'js')));

gulp.task('watch', function () {
  gulp.watch('sass/**/*.sass', gulp.series('sass'));
  gulp.watch('assets/**/*.{png, svg}', gulp.series('assets'));
  gulp.watch('js/**/*.js', gulp.series('js'));
});

gulp.task('serve', function() {
  browserSync.init({
    server: '.'
  });

  browserSync.watch(['dist/css/index.css', '*.html', 'dist/js/app.js']).on('change', browserSync.reload);
});

gulp.task('dev', gulp.series('build', gulp.parallel('watch', 'serve')));
