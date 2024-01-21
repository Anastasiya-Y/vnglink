import gulp from 'gulp';
import plumber from 'gulp-plumber';
import svgSprite from 'gulp-svg-sprite';
import webp from 'gulp-webp';
import imagemin from 'gulp-imagemin';

const sprite = () => {
    return gulp.src('source/img/sprite/*.svg')
        .pipe(plumber())
        .pipe(svgSprite({
            mode: {
                stack: {
                    sprite: `../sprite.svg`
                }
            }
        }))
        .pipe(gulp.dest('build/img/'))
}

const adaptImages = () => {
    return gulp.src('source/img/**/*.{jpg,jpeg,png,gif,webp}')
        .pipe(plumber())
        .pipe(webp())
        .pipe(gulp.dest('build/img/'))
        .pipe(gulp.src('source/img/**/*.{jpg,jpeg,png,gif,webp}'))
        .pipe(imagemin({
            progressive: true,
            quality: 85,
            interlaced: true,
            optimizationLevel: 3,
        }))
        .pipe(gulp.dest('build/img/'))
}

const adaptSvg = () => {
    return gulp.src('source/img/**/*.svg')
        .pipe(plumber())
        .pipe(
            imagemin({
                plugins: [
                  {
                    name: 'removeViewBox',
                    active: false,
                  },
                  {
                    name: 'removeRasterImages',
                    active: true,
                  },
                  {
                    name: 'removeUselessStrokeAndFill',
                    active: false,
                  }],
            })
        )
        .pipe(gulp.dest('build/img/'))
}

export {sprite, adaptImages, adaptSvg}