import gulp from 'gulp';
import htmlmin from 'gulp-html-minifier';
import versionNumber from 'gulp-version-number';
import plumber from 'gulp-plumber';

const html = () => {
    return gulp.src('source/*.html')
        .pipe(plumber())
        .pipe(
            versionNumber({
                'value': '%DT%',
                'append': {
                    'key': '_v',
                    'cover': 0,
                    'to': [
                        'css',
                        'js',
                    ]
                },
                'output': {
                    'file': 'version.json'
                }
            })
        )
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('build'))
}

export {html}
