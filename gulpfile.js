const { series, src, dest, watch } = require("gulp");
const sass = require("gulp-sass");

// Function that compiles SASS

function css() {
  return src("src/scss/app.scss")
    .pipe(
      sass({
        outputStyle: "expanded",
      })
    )
    .pipe(dest("./build/css"));
}

function mincss() {
  return src("src/scss/app.scss")
    .pipe(
      sass({
        outputStyle: "compressed",
      })
    )
    .pipe(dest("./build/css"));
}

function watchArchives() {
  watch("src/scss/**/*.scss", css); // ** = all files,  * =  extension
}

exports.css = css;
exports.mincss = mincss;
exports.watchArchives = watchArchives;
