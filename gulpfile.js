import gulp from 'gulp';
import minifycss from 'gulp-clean-css';
import uglify from 'gulp-uglify';
import htmlmin from 'gulp-htmlmin';
import htmlclean from 'gulp-htmlclean';
import imagemin, { gifsicle, mozjpeg, optipng, svgo } from 'gulp-imagemin';
import concat from 'gulp-concat';
import concatCss from 'gulp-concat-css';
import del from 'del';
import HexoPkg from 'hexo';

const Hexo = HexoPkg.default || HexoPkg;
const paths = { node_modules: './node_modules/' };

function clean() {
    return del(['public/**/*']);
}

const hexo = new Hexo(process.cwd(), {});

async function generate() {
    await hexo.init();
    await hexo.call('generate', { watch: false });
    await hexo.exit();
}

async function deploy() {
    await hexo.init();
    try {
        await hexo.call('deploy', { watch: false });
    } finally {
        await hexo.exit();
    }
}

function concatJs() {
    return gulp.src([
        paths.node_modules + 'jquery/jquery.js',
        paths.node_modules + 'feather-icons/dist/feather.js',
        paths.node_modules + 'bootstrap/dist/js/bootstrap.bundle.js'
    ])
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('./public/js'));
}

function concatCssTask() {
    return gulp.src([
        paths.node_modules + 'bootstrap/dist/css/bootstrap.css'
    ])
        .pipe(concatCss("bundled.css"))
        .pipe(gulp.dest('./public/css'));
}

function minifyCss() {
    return gulp.src('./public/**/*.css')
        .pipe(minifycss({ compatibility: 'ie8' }))
        .pipe(gulp.dest('./public'));
}

function minifyHtml() {
    return gulp.src('./public/**/*.html')
        .pipe(htmlclean())
        .pipe(htmlmin({
            removeComments: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true,
        }))
        .pipe(gulp.dest('./public'));
}

function minifyImg() {
    return gulp.src('./public/images/**/*')
        .pipe(imagemin([
            gifsicle({ interlaced: true }),
            mozjpeg({ progressive: true }),
            optipng({ optimizationLevel: 5 }),
            svgo({
                plugins: [
                    { removeViewBox: true },
                    { cleanupIDs: false }
                ]
            })
        ]))
        .pipe(gulp.dest('./public/images'));
}

function minifyJs() {
    return gulp.src('./public/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./public'));
}

export { clean };
export { generate };
export { deploy };
export { concatJs as 'concat-js' };
export { concatCssTask as 'concat-css' };
export const concatTask = gulp.series(concatJs, concatCssTask);
export { minifyCss as 'minify-css' };
export { minifyHtml as 'minify-html' };
export { minifyImg as 'minify-img' };
export { minifyJs as 'minify-js' };
export const compress = gulp.series(minifyHtml, minifyCss, minifyJs);
export default gulp.series(clean, generate, concatTask, compress);
export { concatTask as concat };