var gulp       = require('gulp');
var ts         = require('gulp-typescript');
var tslint     = require('gulp-tslint');
var sass       = require('gulp-sass');
var plumber    = require('gulp-plumber');
var server     = require('gulp-server-livereload');
var jshint     = require('gulp-jshint');
var stylish    = require('jshint-stylish');
var htmlhint   = require('gulp-htmlhint');
var sourcemaps = require('gulp-sourcemaps');
var concat     = require('gulp-concat');

var paths = {
  appJavascript: ['**/*.ts', '**/**/*.ts', '!node_modules/**/*.**']
}

// ============================================
//  CONCAT ALL REQUIRED POLYFILLS (IN ORDER)
// ============================================

gulp.task('polyfills', function() {
  return gulp.src([
    'node_modules/es6-shim/es6-shim.min.js',
    'node_modules/systemjs/dist/system-polyfills.js',
    'node_modules/angular2/bundles/angular2-polyfills.js',
    'node_modules/systemjs/dist/system.src.js',
    'node_modules/rxjs/bundles/Rx.js',
    'node_modules/angular2/bundles/angular2.dev.js'
    ])
    .pipe(concat('polyfills.js'))
    .pipe(gulp.dest('./app/dist'));
});


// ============================================
//  TYPESCRIPT LINTER
// ============================================

gulp.task('ts-lint', function() {
 return gulp.src(paths.appJavascript)
    .pipe(tslint())
    .pipe(tslint.report('ts-report'));
});


// ============================================
//  TYPESCRIPT TRANSPILING
// ============================================

// loads configuration

var tsProject = ts.createProject('tsconfig.json'); 

// loads all files from paths specification and transpiles files into js

gulp.task('ts', function() {
  var tsResults = tsProject.src(paths.appJavascript)
    .pipe(ts(tsProject));

  return tsResults.js.pipe(gulp.dest('./app/dist')); // save files in same place as .ts files
});

// ============================================
//  CONCAT - take all transpiled to one .js
// ============================================

gulp.task('concat', function() {
  return gulp.src([
    './build/*.js',
    './build/**/*.js'
    ])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./app/dist/'));
});

// ============================================
//  SOURCEMAPS (JS & CSS)
// ============================================

gulp.task('js-map', function() {
  gulp.src('./app/dist/app.js')
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./app/maps'));
});

gulp.task('css-map', function() {
  gulp.src('./app/css/main.css')
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./app/maps'));
});

gulp.task('maps', ['js-map', 'css-map']);

// ============================================
//  COMPILE ALL THE THINGS
// ============================================

gulp.task('compile', ['concat', 'maps']);

// ============================================
//  SASS
// ============================================

gulp.task('sass', function() {
  return gulp.src('./sass/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('./app/css'));
});

// ============================================
//  WATCH
// ============================================

// start server + watch task

gulp.task('watch', ['watchlist', 'webserver', 'compile']);

gulp.task('watchlist', function() {
  gulp.watch('./ts/**.ts', ['ts-lint']);
  gulp.watch('./ts/**.ts', ['ts']);
  gulp.watch('./sass/*.scss', ['sass']);
  gulp.watch('./app/index.html', ['hint:html']);
  gulp.watch(['./app/**/*.js', '!./app/dist/app.js'], ['hint:js']);
})

// ============================================
//  SERVER
// ============================================

gulp.task('webserver', function() {
  return gulp.src('')
    .pipe(server({
      defaultFile: 'app/index.html',
      livereload: true
    }));
});

// ============================================
//  HINT
// ============================================

gulp.task('hint:js', function() {
  return gulp.src(['./app/*.js', './build/**/*.js', '!./app/dist/app.js'])
    .pipe(jshint({"esnext" : true}))
    .pipe(jshint.reporter('fail'))
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('hint:html', function() {
  return gulp.src('app/index.html')
    .pipe(htmlhint())
    .pipe(htmlhint.failReporter());
});

