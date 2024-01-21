import gulp from 'gulp';

const copy = () => {
    return gulp.src([
        'source/**.html',
        'source/fonts/**',
        'source/img/**',
        'source/favicon/**'
    ], {
        base: 'source',
    })
        .pipe(gulp.dest('build'))
};

export {copy};
