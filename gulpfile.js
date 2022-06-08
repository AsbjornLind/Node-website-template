const gulp = require("gulp");
const scss = require("gulp-dart-scss");
const minify = require('gulp-minify');
const cleanCss = require('gulp-clean-css');

function compileScss() {
    return gulp
        .src("./src/assets/scss/*.scss")
        .pipe(
            scss({})
        )
        .pipe(cleanCss())
        .pipe(gulp.dest("./dist/assets/css"));
}

function moveJS() {
    return gulp
        .src("./src/assets/js/*.js")
        .pipe(minify())
        .pipe(gulp.dest("./dist/assets/js"))
}

function moveImages() {
    return gulp
        .src("./src/assets/img/*.{jpg,png,jpeg,PNG,JPG,JPEG,svg}")
        .pipe(gulp.dest("./dist/assets/img"))
}

function moveHtml() {
    return gulp
        .src("./src/assets/pages/*.html")
        .pipe(gulp.dest("./dist/assets/pages"))
}

function moveRoutes() {
    return gulp
        .src("./src/assets/routes/*.js")
        .pipe(gulp.dest("./dist/assets/routes"))
}


exports.default = function() {
    gulp.watch('./src/assets/scss/*.scss', compileScss);
    gulp.watch('./src/assets/js/*.js', moveJS);
    gulp.watch('./src/assets/img/*', moveImages);
    gulp.watch('./src/assets/pages/*', moveHtml);
    gulp.watch('./src/assets/routes/*', moveRoutes);
};