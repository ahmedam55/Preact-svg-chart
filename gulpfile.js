var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

var htmlPath = 'src/**/*.html';
var jsPath = 'dist/**/*.js';
var sassPath = 'src/**/*.scss';
var distPath = 'dist/';


gulp.task('sass', function() {
    return gulp.src(sassPath)
        .pipe(sass())
        .pipe(gulp.dest(distPath))
        .pipe(browserSync.stream());
});

gulp.task('copy:html', function() {
    return gulp.src('src/index.html')
        .pipe(gulp.dest(distPath));

    browserSync.reload();
})

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: distPath
        }
    });
});

gulp.task('watch', function() {
    gulp.watch(htmlPath, ['copy:html']);
    gulp.watch(jsPath).on('change', browserSync.reload);
    gulp.watch(sassPath, ['sass']);
})

gulp.task('default', ['copy:html', 'sass', 'browser-sync', 'watch']);
