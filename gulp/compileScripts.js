import gulp from 'gulp';
import webpack from 'webpack-stream';
import plumber from 'gulp-plumber';

const scripts = () => {
    return gulp.src('source/js/main.js', { sourcemaps: true })
        .pipe(plumber())
        .pipe(webpack({
            mode: 'development',
            output: {
                filename: 'main.min.js',
            }
        }))
        .pipe(gulp.dest('build/js/'))
}

export {scripts}