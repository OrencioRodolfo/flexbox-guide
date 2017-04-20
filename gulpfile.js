const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const moduleImporter = require('sass-module-importer');
const autoprefixer = require('gulp-autoprefixer');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {
    browserSync.init({
      server: "./"
    });

    gulp.watch("assets/scss/**/*.scss", ['sass']);
    gulp.watch("./assets/js/*.js").on('change', browserSync.reload);
    gulp.watch("./*.html").on('change', browserSync.reload);
    gulp.watch("./partials/**/*.hbs").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
  return gulp.src("assets/scss/main.scss")
    .pipe(sass({ importer: moduleImporter() }))
    .pipe(gulp.dest("assets/css"))
    .pipe(autoprefixer({
      browsers: ['last 4 versions'],
      cascade: false
    }))
    .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);