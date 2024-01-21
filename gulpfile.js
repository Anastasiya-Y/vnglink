import gulp from 'gulp';
import {deleteAsync as del} from 'del';
import browserSync from 'browser-sync';

import {copy} from './gulp/copyFiles.js';
import {html} from './gulp/compileHtml.js'
import {styles} from './gulp/compileStyles.js'
import {scripts} from './gulp/compileScripts.js'
import {sprite, adaptImages, adaptSvg} from './gulp/adaptImages.js'

const clean = () => del('build');

const server = browserSync.create();

const syncServer = () => {
    server.init({
        server: {
            baseDir: 'build'
        },
        cors: true,
        notify: false,
        ui: false,
    });
}

const reloadStyles = () => styles().pipe(server.stream());

const reload = (done) => {
    server.reload();
    done();
};

const watcher = () => {
    gulp.watch('source/sass/**/*.scss', reloadStyles);
    gulp.watch('source/js/**/*.js', gulp.series(scripts, reload));
    gulp.watch('source/*.html', gulp.series(html, reload));
}

export const build = gulp.series(
    clean,
    copy,
    sprite,
    gulp.parallel(
        html,
        styles,
        scripts,
        adaptImages,
        adaptSvg
    ),
    gulp.parallel(
        syncServer,
        watcher
    )
)
