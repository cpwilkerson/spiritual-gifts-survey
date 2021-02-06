const {buildScss, watchScss} = require('./gulp-tasks/scss-compile');
const {copyIndex, watchIndex} = require('./gulp-tasks/file-tasks');
const fs = require('fs');

/**
 * Gulp build command
 * @param {func} done error-first callback
 * @return {void}
 */
function build (done) {
  buildScss();
  copyIndex();
  done();
}

/**
 * Gulp watch command
 * @param {func} done error-first callback
 * @return {void}
 */
function watch (done) {
  watchIndex();
  watchScss();
  done();
}

/**
 * Gulp function for running unit tests
 * @param {func} done gulp "done" function
 * @return {void}
 */
function test (done) {
  if (!fs.exists('./dist')) {
    build(done);
  }
  done();
}

/**
 * Default gulp task
 * @param {func} done error-first callback
 * @return {void}
 */
function defaultTask (done) {
  build(done);
}

exports.test = test;
exports.watch = watch;
exports.build = build;
exports.default = defaultTask;