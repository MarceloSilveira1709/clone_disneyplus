const gulp = require('gulp'); // importa o gulp e o sass//
const sass = require('gulp-sass')(require('sass'));

function styles ( ) {
    return gulp.src('./src/styles/*scss') // função styles pega todos aquivos scss//
        .pipe(sass({outputStyle: 'compressed'})) //comprime os arquivos
        .pipe(gulp.dest('./dist/css')); //coloca na pasta de destino
}

    exports.default = styles;
    exports.watch = function () {
        gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
    }