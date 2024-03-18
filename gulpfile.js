const gulp = require('gulp'); // importa o gulp e o sass//
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

function styles ( ) {
    return gulp.src('./src/styles/*scss') // função styles pega todos aquivos scss//
        .pipe(sass({outputStyle: 'compressed'})) //comprime os arquivos
        .pipe(gulp.dest('./dist/css')); //coloca na pasta de destino
}

function images ( ) {
    return gulp.src('./src/images/**/*') // função images pega todos aquivos nas pastas//
        .pipe(imagemin()) //executa o imagemin
        .pipe(gulp.dest('./dist/images')); //coloca na pasta de destino
}

    exports.default = gulp.parallel(styles, images); // executa as funçoes em paralelo//

    exports.watch = function () {
        gulp.watch('./src/styles/*.scss', gulp.parallel(styles)) // função chama o watch para salvar alterações a pasta styles//
    }