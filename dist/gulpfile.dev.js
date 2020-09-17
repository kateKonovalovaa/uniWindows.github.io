"use strict";

var gulp = require('gulp');

var stylus = require('gulp-stylus');

var pug = require('gulp-pug');

var autoprfixer = require('autoprefixer');

var postcss = require('gulp-postcss');

var cssmin = require('gulp-cssmin');

var rename = require('gulp-rename');

var browserSync = require('browser-sync');

var concat = require('gulp-concat'); // const uglify = require('uglify-js-es6').default;


var cache = require('gulp-cache');

var pngquant = require('imagemin-pngquant');

var imagemin = require('gulp-imagemin');

var livereload = require('gulp-livereload');

var postplugins = [autoprfixer];
/**
 * task for livereload page in browser
 */

gulp.task('browser-sync', function () {
  browserSync({
    server: {
      baseDir: 'public'
    },
    notify: false
  });
});
/**
 * task for processing .styl files
 */

gulp.task('styles', function () {
  return gulp.src('./source/assets/styles/main.styl').pipe(stylus()).pipe(postcss(postplugins)).pipe(gulp.dest('./public/assets/css'));
});
/**
 * task for processing .pug files
 */

gulp.task('pages', function () {
  return gulp.src('./source/pages/*.pug').pipe(pug({
    pretty: true
  })).pipe(gulp.dest('./public'));
});
gulp.task('jquery', function () {
  return gulp.src(['./bower_components/jquery/dist/jquery.min.js']).pipe(concat('jquery.min.js')).pipe(gulp.dest('./source/assets/js')).pipe(gulp.dest('./public/assets/js'));
});
gulp.task('chart', function () {
  return gulp.src('./source/assets/js/chart.min.js').pipe(gulp.dest('./public/assets/js'));
});
/**
 * task for processing .js files
 */

gulp.task('scripts', function () {
  return gulp.src(['./source/blocks/**/*.js', './source/assets/js/*.js']).pipe(concat('libs.min.js')) // .pipe(uglify())
  .pipe(gulp.dest('./public/assets/js'));
});
/**
 * task for images
 */

gulp.task('images', function () {
  return gulp.src('./source/assets/images/*').pipe(cache(imagemin({
    interlaced: true,
    progressive: true,
    svgoPlugins: [{
      removeViewBox: false
    }],
    une: [pngquant]
  }))).pipe(gulp.dest('./public/assets/images'));
});
gulp.task('fonts', function () {
  return gulp.src(['./bower_components/font-awesome/**/*']).pipe(gulp.dest('./public/assets/fonts'));
});
gulp.task('watch', ['browser-sync', 'pages', 'styles', 'scripts', 'images', 'fonts', 'jquery', 'chart'], function () {
  gulp.watch(['./source/**/*.styl', './source/styles/*.styl'], ['styles', browserSync.reload]);
  gulp.watch('./source/blocks/**/*.pug', ['pages', browserSync.reload]);
  gulp.watch('./source//blocks/**/*.js', ['scripts', browserSync.reload]);
  gulp.watch('./source/assets/images*', ['images']);
});
gulp.task('default', ['pages', 'styles', 'images', 'fonts', 'scripts', 'jquery', 'chart', 'watch']);