/// <binding Clean='clean' />
"use strict";

var gulp = require("gulp"),
    rimraf = require("rimraf"),
    concat = require("gulp-concat"),
    cssmin = require("gulp-cssmin"),
    uglify = require("gulp-uglify");

var paths = {
    webroot: "./wwwroot/"
};

paths.js = paths.webroot + "js/**/*.js";
paths.minJs = paths.webroot + "js/**/*.min.js";
paths.css = paths.webroot + "css/**/*.css";
paths.minCss = paths.webroot + "css/**/*.min.css";
paths.concatJsDest = paths.webroot + "js/site.min.js";
paths.concatCssDest = paths.webroot + "css/site.min.css";
paths.genJsDest = paths.webroot + "app/**/*.js";
paths.libJsDest = paths.webroot + "lib";
paths.cssDest = paths.webroot + "css";
paths.cssLibDest = paths.webroot + "css/lib";

gulp.task("clean:js", function (cb) {
    rimraf(paths.concatJsDest, cb);
});

gulp.task("clean:lib", function (cb) {
    rimraf(paths.libJsDest, cb);
});

gulp.task("clean:css", function (cb) {
    rimraf(paths.concatCssDest, cb);
});

gulp.task("clean", ["clean:js", "clean:css"]);

gulp.task("min:js", function () {
    return gulp.src([paths.js, "!" + paths.minJs], { base: "." })
        .pipe(concat(paths.concatJsDest))
        .pipe(uglify())
        .pipe(gulp.dest("."));
});

gulp.task("min:css", function () {
    return gulp.src([paths.css, "!" + paths.minCss])
        .pipe(concat(paths.concatCssDest))
        .pipe(cssmin())
        .pipe(gulp.dest("."));
});

gulp.task("min", ["min:js", "min:css"]);

gulp.task('copy:css', ['clean:css'], function () {
    return gulp
        .src([
            'node_modules/primeui/primeui-ng-all.min.css',
            'node_modules/bootstrap/dist/**/*.css',
            'node_modules/bootstrap/dist/fonts/*',
            "node_modules/toastr/build/*.css",
            "node_modules/metismenu/dist/*.css",
            "node_modules/bootstrap-datepicker/dist/css/*.css",
            "node_modules/dropzone/dist/min/dropzone.min.css",
        ], { base: 'node_modules' })
        .pipe(gulp.dest(paths.cssLibDest));
});

// copy dependencies
gulp.task('copy:lib', function () {
    return gulp.src([
           "node_modules/@angular/common/**/*.js",
           "node_modules/@angular/common/**/*.map",
           "node_modules/@angular/compiler/**/*.js",
           "node_modules/@angular/compiler/**/*.map",
           "node_modules/@angular/core/**/*.js",
           "node_modules/@angular/core/**/*.map",
           "node_modules/@angular/forms/**/*.js",
           "node_modules/@angular/forms/**/*.map",
           "node_modules/@angular/http/**/*.js",
           "node_modules/@angular/http/**/*.map",
           "node_modules/@angular/platform-browser/**/*.js",
           "node_modules/@angular/platform-browser/**/*.map",
           "node_modules/@angular/platform-browser-dynamic/**/*.js",
           "node_modules/@angular/platform-browser-dynamic/**/*.map",
           "node_modules/@angular/router/**/*.js",
           "node_modules/@angular/router/**/*.map",
           "node_modules/@angular/router-deprecated/**/*.js",
           "node_modules/@angular/router-deprecated/**/*.map",
           "node_modules/@angular/upgrade/**/*.js",
           "node_modules/@angular/upgrade/**/*.map",
           "node_modules/rxjs/**/*.js",
           "node_modules/rxjs/**/*.map",
           "node_modules/core-js/client/shim.min.js",
           "node_modules/zone.js/dist/zone.js",
           "node_modules/reflect-metadata/Reflect.js",
           "node_modules/systemjs/dist/system.src.js",
           "node_modules/primeng/**/*.js",
           "node_modules/primeng/**/*.map",
           "node_modules/bootstrap/dist/js/bootstrap.min.js",
           "node_modules/jquery/dist/jquery.min.js",
           "node_modules/jquery/dist/jquery.min.map",
           "node_modules/jquery-slimscroll/*.js",
           "node_modules/linq-ts/dist/**/*",
           "node_modules/toastr/build/*.js",
           "node_modules/toastr/build/*.map",
           "node_modules/pace/pace.js",
           "node_modules/metismenu/dist/*.js",
           "node_modules/metismenu/dist/*.map",
           "node_modules/bootstrap-datepicker/dist/js/*.js",
           "node_modules/bootstrap-datepicker/dist/locales/bootstrap-datepicker.en-GB.min.js",
           "node_modules/angular2-jwt/angular2-jwt.js",
           "node_modules/angular2-jwt/angular2-jwt.js.map",
           "node_modules/dropzone/dist/min/dropzone.min.js",
           "node_modules/linq/linq.min.js",
    ],
   { base: "node_modules" })
   .pipe(gulp.dest(paths.libJsDest));
});