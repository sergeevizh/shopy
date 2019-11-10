let uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    scriptsPATH = {
        "input": "./dev/static/js/",
        "ouput": "./build/static/js/"
    },
    babel = require('gulp-babel');

module.exports = function () {
    $.gulp.task('libsJS:dev', () => {
        return $.gulp.src(['dev/static/libjs/progressive-image.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/svg4everybody/dist/svg4everybody.min.js',
                'node_modules/slick-carousel/slick/slick.min.js',
                'node_modules/focus-visible/dist/focus-visible.min.js', 'node_modules/nouislider/distribute/nouislider.min.js', 'node_modules/wnumb/wNumb.js', 'dev/static/js/main.js'
            ]).pipe(babel())
            .pipe(concat('main.min.js'))
            .pipe($.gulp.dest(scriptsPATH.ouput));
    });

    $.gulp.task('libsJS:build', () => {
        return $.gulp.src(['dev/static/libjs/progressive-image.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/svg4everybody/dist/svg4everybody.min.js',
                'node_modules/slick-carousel/slick/slick.min.js',
                'node_modules/focus-visible/dist/focus-visible.min.js', 'node_modules/nouislider/distribute/nouislider.min.js', 'node_modules/wnumb/wNumb.js', 'dev/static/js/main.js'
            ]).pipe(babel())
            .pipe(concat('main.min.js'))
            .pipe(uglify())
            .pipe($.gulp.dest(scriptsPATH.ouput));
    });

    $.gulp.task('js:dev', () => {
        return $.gulp.src([scriptsPATH.input + '*.js']).pipe(babel())
            .pipe($.gulp.dest(scriptsPATH.ouput))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });

    $.gulp.task('js:build', () => {
        return $.gulp.src([scriptsPATH.input + '*.js']).pipe(babel())
            .pipe($.gulp.dest(scriptsPATH.ouput))
    });

    $.gulp.task('js:build-min', () => {
        return $.gulp.src([scriptsPATH.input + '*.js']).pipe(babel())
            .pipe(concat('main.min.js'))
            .pipe(uglify())
            .pipe($.gulp.dest(scriptsPATH.ouput))
    });
};