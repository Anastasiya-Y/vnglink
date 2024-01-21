import gulp from 'gulp';
import * as sass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';
import plumber from 'gulp-plumber';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import csso from 'postcss-csso';

const dartSass = gulpSass(sass);

const styles = () => {
    return gulp.src('source/sass/style.scss', { sourcemaps: true })
        .pipe(plumber())
        .pipe(dartSass({
            outputStyle: 'expanded'
        }))
        .pipe(gulp.dest('build/css'))
        .pipe(postcss([
            autoprefixer(),
            csso()
        ]))
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(gulp.dest('build/css/', { sourcemaps: '.' }))
}


export {styles}