"use strict";

var gulp = require("gulp"),
	sass = require("gulp-sass"),
	prefix = require("gulp-autoprefixer"),
	concat = require("gulp-concat"),
	templateCache = require('gulp-angular-templatecache'),
	eventStream = require("event-stream");

var Server = require("karma").Server;

var dist = "dist",
	src = "src",
	srcJs = [
		src + "/**/*.module.js",
		src + "/**/*.config.js",
		src + "/**/!(*spec).js"
	],
	srcHtml = "src/index.html";

var vendorSrcJs = [
	"bower_components/angular/angular.min.js",
	"bower_components/angular-animate/angular-animate.min.js"
];

var vendorSrcCss = [
	"bower_components/bootstrap/dist/css/bootstrap.min.css"
];

var vendorFonts = [
	"bower_components/bootstrap/dist/fonts/*"
];

gulp.task("default", ["build", "watch"]);

gulp.task("sass", function() {
	return gulp.src(src + "/**/*.scss")
		.pipe(sass())
		.pipe(prefix({
			browsers: ['last 15 versions'],
			cascade: false
		}))
		.pipe(concat("test-football-app.css"))
		.pipe(gulp.dest(dist + "/test-football-app"));
});

gulp.task("js", function() {
	return eventStream.merge(
		gulp.src(src + "/*/**/*.html")
			.pipe(templateCache({
				standalone: true,
				module: 'templates'
			})),
		gulp.src(srcJs)
	)
		.pipe(concat("test-football-app.js"))
		.pipe(gulp.dest(dist + '/test-football-app'));
});

gulp.task("vendorCss", function() {
	return gulp.src(vendorSrcCss)
		.pipe(concat("vendor.min.css"))
		.pipe(gulp.dest(dist + "/vendor"))
});

gulp.task("vendorJs", function() {
	return gulp.src(vendorSrcJs)
		.pipe(concat("vendor.min.js"))
		.pipe(gulp.dest(dist + "/vendor"))
});

gulp.task("index", function() {
	return gulp.src(srcHtml)
		.pipe(gulp.dest(dist))
});

gulp.task("img", function() {
	gulp.src(src + "/images/*")
		.pipe(gulp.dest(dist + "/images"))
});

gulp.task("fonts", function() {
	gulp.src(vendorFonts)
		.pipe(gulp.dest(dist + "/fonts"))
});

gulp.task('watch', function() {
	gulp.watch(srcHtml, ["index"]);
	gulp.watch(src + "/**/*.scss", ["sass"]);
	gulp.watch(src + "/**/*.js", ["js"]);
	gulp.watch(src + "/*/**/*.html", ["js"]);
});

gulp.task("build", ["vendorJs", "vendorCss", "sass", "index", "js", "img", "fonts"]);

gulp.task("unit-test", function(done) {
	new Server({
		configFile: __dirname + "/karma.conf.js",
		singleRun: true
	}, done).start();
});

