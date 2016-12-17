var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var sourcemaps = require('gulp-sourcemaps');
var tinypng = require('gulp-tinypng-compress');
var jshint=require('gulp-jshint');
var uglify = require('gulp-uglify');
var gulpCopy = require('gulp-file-copy');
var fs = require('fs');
var flatten = require('gulp-flatten');
var plumber = require('gulp-plumber');



gulp.task("tinypng", function(){
    gulp.src('./static/images/src/*.{png,jpg,jpeg}')
        .pipe(tinypng({
            key: 'KW8hT5AMx05TI9DVXLx_hoQOD7BDU1OM',
            sigFile: 'images/.tinypng-sigs',
            log: true
        })).on('error', function(err) {
            console.error(err.message);
        })
        .pipe(gulp.dest('./static/images'));
});

//语法检查
gulp.task('jshint', function () {
	return gulp.src('./src/js/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

gulp.task('sassfile',function(){
    return gulp.src('./src/css/src/*.scss')
    .pipe(plumber({
        errorHandler:function(error){
            console.log(error.message);
            plumber.stop()
        }
    }))
    .pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle: 'compressed'     
    }))
    //.pipe(sourcemaps.write()) //开发调试时打开
    .pipe( gulp.dest( './css' ) );
});

gulp.task('jsmin', function () {
    gulp.src('./src/js/**')
        .pipe(uglify())
        .pipe(gulp.dest('./js'));
});

  gulp.task('copy-img', function() {
    gulp.src('./src/images/**')
	.pipe(flatten())
	.pipe(gulp.dest('./images'));
  });

gulp.task('default',['jshint'], function() {
	
  // 将你的默认的任务代码放在这
  gulp.start('sassfile','jsmin','copy-img'); 
  gulp.watch('./src/css/src/**', ['sassfile']);
  gulp.watch('./src/js/**', ['jsmin']);
  gulp.watch('./src/images/**', ['copy-img']);
});