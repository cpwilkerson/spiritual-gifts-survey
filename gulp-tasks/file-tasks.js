const gulp = require('gulp');

/**
 * Watches index.html and copies it to the dist directory
 * @return {void}
 */
function watchIndex () {
  const watcher = gulp.watch(['./src/server/index.html']);

  watcher.on('change', (path) => {
    gulp.src(path.path).pipe(gulp.dest('./dist/server/'));
  });
}

/**
 * Copies index.html to the dist directory
 * @return {void}
 */
function copyIndex () {
  gulp.src('./src/server/index.html').pipe(gulp.dest('./dist/server/'));
}

exports.copyIndex = copyIndex;
exports.watchIndex = watchIndex;