const { series, src, dest, watch } = require("gulp");
const sass = require("gulp-sass");
const imagemin = require("gulp-imagemin");
const notify = require("gulp-notify");
const webp = require("gulp-webp");

// Function that compiles SASS

const paths = {
  images: "src/img/**/*",
  scss: "src/scss/**/*.scss",
};

function css() {
  return src(paths.scss)
    .pipe(
      sass({
        outputStyle: "expanded",
      })
    )
    .pipe(dest("./build/css"));
}

function mincss() {
  return src("paths.scss")
    .pipe(
      sass({
        outputStyle: "compressed",
      })
    )
    .pipe(dest("./build/css"));
}

function images() {
  return src(paths.images)
    .pipe(imagemin())
    .pipe(dest("./build/img"))
    .pipe(notify({ message: "Minified image" }));
}

function convertWebp() {
  return src(paths.images)
    .pipe(webp())
    .pipe(dest("./build/img"))
    .pipe(notify({ message: "Version webp Done!" }));
}

function watchArchives() {
  watch(paths.scss, css); // ** = all files,  * =  extension
}

exports.css = css;
exports.mincss = mincss;
exports.images = images;
exports.convertWebp = convertWebp;
exports.watchArchives = watchArchives;

exports.default = series(css, images, convertWebp, watchArchives);
