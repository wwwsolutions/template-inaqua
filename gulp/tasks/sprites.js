const gulp = require('gulp');
const svgSprite = require('gulp-svg-sprite');
const rename = require('gulp-rename');
const del = require('del');

const paths = {
  temp: {
    root: './temp',
    sprites: './temp/sprite/',
    svg: './temp/sprite/css/*.svg',
    css: './temp/sprite/css/*.css'
  },
  src: {
    sprites: './src/assets/images/sprites',
    icons: './src/assets/images/icons/**/*.svg',
    modules: './src/app/styles/modules'
  },
  templates: {
    sprite: './gulp/templates/sprite.css'
  }
};

const config = {
  mode: {
    css: {
      sprite: 'sprite.svg',
      render: {
        css: {
          template: paths.templates.sprite
        }
      }
    }
  }
};

function beginClean() {
  return del([paths.temp.root, paths.src.sprites]);
}

function createSprite() {
  return gulp.src(paths.src.icons)
    .pipe(svgSprite(config))
    .pipe(gulp.dest(paths.temp.sprites));
}

function copySpriteGraphic() {
  return gulp.src(paths.temp.svg)
    .pipe(gulp.dest(paths.src.sprites));

  }

function copySpriteCSS() {
  return gulp.src(paths.temp.css)
    .pipe(rename('_sprite.css'))
    .pipe(gulp.dest(paths.src.modules));
}

function endClean() {
  return del([paths.temp.root]);
}

exports.beginClean = beginClean;
exports.createSprite = createSprite;
exports.copySpriteGraphic = copySpriteGraphic;
exports.copySpriteCSS = copySpriteCSS;

const build = gulp.series(beginClean, createSprite, copySpriteGraphic, copySpriteCSS, endClean);

gulp.task('icons', build);
