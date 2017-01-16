require ("babel-polyfill");

var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var autoprefixer = require('autoprefixer');
var postcss = require('gulp-postcss');
var browserify = require('browserify');
var watchify   = require('watchify');
var babelify = require('babelify');
var duration = require('gulp-duration');
var source = require('vinyl-source-stream');
var concat = require('gulp-concat');
var notify = require('gulp-notify');
var uglify = require('gulp-uglify');

var path = require('path');
var webpack = require('webpack');
var src = path.join(__dirname, 'src');


var config = {
    context: src,
    entry: './index',
    output: {
        path: path.join(__dirname, 'dist')
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin({
        //     minimize: true,
        //     compress: {
        //         warnings: false
        //     }
        // }),
        new webpack.optimize.DedupePlugin(),
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify('prod')
        })
    ],
    module: {
        loaders: [{
            test: /.js?$/,
            loader: 'babel-loader',
            include: src,
            exclude: /node_modules/,
            query: {
                presets: [
                    'es2015',
                    'stage-1',
                    'react'
                ]
            }
        }]
    },
    // resolve: {
    //     root: path.resolve(__dirname),
    //     extensions: ['', '.js', '.jsx'],
    //     alias: {
    //         components: 'js/components'
    //     }
    // }
};
var compiler = webpack(config);


var handleError = function(task) {
    return function(err) {
        notify.onError({
            message: task + ' failed, check the logs..',
            sound: false
        })(err);

        gutil.log(gutil.colors.bgRed(task + ' error:'), gutil.colors.red(err));
        this.emit('end');
    };
};

gulp.task('assets', function (cb) {
    return gulp.src('src/assets/**/*')
        .pipe(gulp.dest('dist/assets/'));
});

gulp.task('html', function (cb) {
    return gulp.src('src/**/*.html')
        .pipe(gulp.dest('dist/'));
});

gulp.task('sass', function () {
    gulp.src('src/styles/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat("style.css"))
        .pipe(gulp.dest('./dist'));
});

gulp.task('fonts', function (cb) {
    return gulp.src('src/styles/fonts/**/*')
        .pipe(gulp.dest('dist/fonts/'));
});

gulp.task('browserify', function () {
    // return browserify({entries: 'src/index.js', extensions: ['.js'], debug: true})
    //     .transform('babelify', {presets: ['stage-0', 'es2015', 'react'], plugins: ["transform-object-rest-spread", "transform-class-properties"]})
    //     .bundle()
    //     .on('error', handleError('Browserify'))
    //     .pipe(source('bundle.js'))
    //     .pipe(gulp.dest('dist'));
    compiler.run(function (err, stats) {
        console.log(stats.toJson());
    });
});

gulp.task('browserify-watch', function () {
    // var bundler = watchify(browserify({
    //         entries: 'src/index.js',
    //         extensions: ['.js'],
    //         debug: false,
    //         cache: {},
    //         packageCache: {},
    //         fullPaths: true}),
    //     {ignoreWatch: ['**/node_modules/**']});
    // bundler.transform('babelify',
    //     {presets: ['stage-0', 'es2015', 'react'],
    //         plugins: ["transform-object-rest-spread", "transform-class-properties"]});
    //
    // function rebundle() {
    //     var bundleTimer = duration('browserify time')
    //     console.log('Start browserify');
    //     return bundler.bundle()
    //         .on('error', handleError('Browserify'))
    //         .pipe(source('bundle.js'))
    //         .pipe(bundleTimer)
    //         .pipe(gulp.dest('dist'));
    // }
    // bundler.on('update', rebundle);
    //
    // return rebundle();
    compiler.run(function (err, stats) {
        console.log(stats.toJson());
    });
});

gulp.task('compress', function() {
    return gulp.src('dist/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', ['assets', 'html', 'sass', 'browserify-watch'], function() {
    gulp.watch('./src/styles/**/*.scss', ['sass']);
    gulp.watch('./src/**/*.html', ['html']);
    gulp.watch('./src/**/*.js', ['browserify']);

    gutil.log(gutil.colors.bgGreen('Watching for changes...'));
});
// build task
gulp.task('build', [
    'assets',
    'sass',
    'html',
    'fonts',
    'browserify'
]);

gulp.task('default', ['watch']);
