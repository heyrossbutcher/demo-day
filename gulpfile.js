var gulp   = require('gulp'),
		jshint = require('gulp-jshint'),
		sass = require('gulp-sass'),
		autoprefixer = require('gulp-autoprefixer'),
		minifycss = require('gulp-minify-css'),
		rename = require('gulp-rename'),
		browserSync = require('browser-sync'),
		reload      = browserSync.reload;

gulp.task('default', ['browser-sync', 'jshint', 'styles', 'watch']);

gulp.task('jshint', function() {
	return gulp.src('wp-content/themes/heyross/js/**/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'))
		.pipe(reload({stream: true}));
});

gulp.task('styles', function() {
	gulp.src('wp-content/themes/heyross/style.scss')
		.pipe(sass({
	  	"sourcemap=none": true
	  }))
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
		.pipe(gulp.dest('wp-content/themes/heyross/'))
		.pipe(rename({suffix: '.min'}))
		.pipe(minifycss())
		.pipe(gulp.dest('wp-content/themes/heyross/'))
		.pipe(reload({stream: true}));
});

gulp.task('browser-sync', function() {
	browserSync({
		server: { baseDir: "./" }
	});
});

// configure which files to watch and what tasks to use on file changes
gulp.task('watch', function() {
	gulp.watch('wp-content/themes/heyross/js/**/*.js', ['jshint']);
	gulp.watch('wp-content/themes/heyross/**/*.scss', ['styles']);
	//gulp.watch('**/*.html', reload);
});