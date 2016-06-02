'use strict';

// This is example of task function

const gulp = tars.packages.gulp;
const plumber = tars.packages.plumber;
const notifier = tars.helpers.notifier;
const copy = require('copy');
const tarsConfig = tars.config;
// Include browserSync, if you need to reload browser:
// const browserSync = tars.packages.browserSync;

/**
 * Task description
 */
module.exports = function () {

    return gulp.task('copy', function (done) {
        copy.each(['markup/static/vendor/jquery/dest/jquery.min.js',
        'markup/static/vendor/bootstrap/dest/js/bootstrap.js'],
        'markup/static/js/framework', function(err, files) {
            console.log('Error: ', err, 'File: ', files);
        });
        notifier.success('Копирование js');
    });
};
