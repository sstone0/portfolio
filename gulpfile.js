const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync');

gulp.task('autoprefix', () => {
	gulp.src('resources/css/style.css')
		.pipe(autoprefixer({
			browsers: ['last 2 versions']
		}))
		.pipe(gulp.dest('resources/css/'));
});

gulp.task('browserSync', () => {
	browserSync.init(['index.html', 'resources/css/*.css', 'resources/js/*.js'], {
		server: {
			baseDir: "./"
		}
	});
});

gulp.task('watch', ['browserSync'], () => {
	gulp.watch(['index.html', './resources/css/*.css', './resources/js/*.js']);
});
