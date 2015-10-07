var gulp            = require('gulp');
var autoprefixer    = require('gulp-autoprefixer');
var sass            = require('gulp-sass');
var uglify          = require('gulp-uglify');
var notify          = require('gulp-notify');
var rename          = require ('gulp-rename');
var concat          = require ('gulp-concat');
var sourcemaps      = require('gulp-sourcemaps');
var livereload      = require('gulp-livereload');
var plumber         = require('gulp-plumber');
var browserify      = require('browserify');
var watchify        = require('watchify');
var babelify        = require('babelify');
var source          = require('vinyl-source-stream');
var buffer          = require('vinyl-buffer');
var gutil           = require('gulp-util');


var jsLibs = [
    'react'
    //'react-router'
];


gulp.task('default', ['sass', 'jsLibs', 'js'], function() {
    livereload.listen();
    gulp.watch(
        "src/scss/**/*.scss", ['sass']
    );
    //gulp.watch(
    //    "src/js/**/*.js", ['js']
    //);
});

gulp.task('csscomponents', function() {
    // Copies CSS components src/vendor
    // Changes .css to a .scss extension
    // For SASS
    return gulp.src([
            'bower_components/normalize.css/normalize.css',
        ])
        .pipe(rename(function(path) {
            path.extname = ".scss"
        }))
        .pipe(gulp.dest('src/scss/vendor'));
});

gulp.task('sass', ['csscomponents'], function() {
    return gulp.src(['src/scss/main.scss'])
        .pipe(plumber({
            errorHandler: function(err) {
                console.log(err);
                notify.onError({
                    title: "Gulp",
                    subtitle: "Failure",
                    message: "Error in task 'sass'",
                    sound: "Frog"
                })(err);
                this.emit('end');
            }
        }))
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 25 versions']
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/css/'))
        .pipe(notify({
            title: "Gulp",
            subtitle: "Success",
            message: "Task 'sass' ran successfully",
            sound: "Glass"
        }))
        .pipe(livereload());
});

gulp.task('jsLibs', function () {
    // set up the browserify instance on a task basis
    var b = browserify({
        debug: true,
        require: jsLibs,
        cache: {},
        packageCache: {}
    }).transform(babelify);

    function bundle() {
        return b.bundle()
            .on("error", function(err) {
                console.log(err.toString());
                notify.onError({
                    title: "Gulp",
                    subtitle: "Failure",
                    message: "Error in task 'jsLibs'",
                    sound: "Frog"
                })(err);
                this.emit('end');
            })
            .pipe(source('libs.bundle.js'))
            .pipe(buffer())
            .pipe(sourcemaps.init({loadMaps: true}))
            // Add transformation tasks to the pipeline here.
            //.pipe(uglify())
            .on('error', gutil.log)
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest('./dist/js/'))
            .pipe(notify({
                title: "Gulp",
                subtitle: "Success",
                message: "Task 'jsLibs' ran successfully",
                sound: "Glass"
            }))
    }

    b.on('update', function() {
        return bundle();
    });

    return bundle();

});

gulp.task('js', function () {
    // set up the browserify instance on a task basis
    var b = browserify('./src/js/app.js', {
        debug: true,
        // defining transforms here will avoid crashing your stream - orlly?
        cache: {},
        packageCache: {}
    });

    jsLibs.forEach(function(lib) {
        b.external(lib);
    });

    b.transform(babelify);

    b = watchify(b);

    function bundle() {
        return b.bundle()
            .on("error", function(err) {
                    console.log(err.toString());
                    notify.onError({
                        title: "Gulp",
                        subtitle: "Failure",
                        message: "Error in task 'js'",
                        sound: "Frog"
                    })(err);
                    this.emit('end');
                }
            )
            .pipe(source('app.bundle.js'))
            .pipe(buffer())
            .pipe(sourcemaps.init({loadMaps: true}))
            // Add transformation tasks to the pipeline here.
            //.pipe(uglify())
            .on('error', gutil.log)
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest('./dist/js/'))
            .pipe(notify({
                title: "Gulp",
                subtitle: "Success",
                message: "Task 'js' ran successfully",
                sound: "Glass"
            }))
            .pipe(livereload());
    }

    b.on('update', function() {
        return bundle();
    });

    return bundle();

});

