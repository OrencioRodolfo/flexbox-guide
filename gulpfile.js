const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const moduleImporter = require('sass-module-importer');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {
    browserSync.init({
      server: "./"
    });

    gulp.watch("assets/scss/**/*.scss", ['sass']);
    gulp.watch("./*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
  return gulp.src("assets/scss/main.scss")
    .pipe(sass({ importer: moduleImporter() }))
    .pipe(gulp.dest("assets/css"))
    .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);