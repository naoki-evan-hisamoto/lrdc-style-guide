var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var minify = require('gulp-minify-css');
var rename = require('gulp-rename');

gulp.task('styles', function() {
	return gulp.src('style-guide/scss/index.scss')
		.pipe(sass())
		.pipe(minify())
		.pipe(rename({
			basename : 'style',
			extname : '.css'
		}))
		.pipe(gulp.dest('style-guide/css'))
		.pipe(gulp.dest('docs'))
		.pipe(browserSync.reload({
			stream: true
		}))
});

gulp.task('browserSync', function() {
	browserSync.init({
		server: {
			baseDir: 'style-guide'
		},
	})
})

gulp.task('watch', ['browserSync', 'styles'], function(){
	gulp.watch('style-guide/scss/base/*.scss', ['styles']);
	gulp.watch('style-guide/scss/*.scss', ['styles']);
})