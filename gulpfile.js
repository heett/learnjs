const gulp = require('gulp') ;
const babel = require('gulp-babel');
gulp.task ( 'default' , function(){
//Исходный код для node
gulp.src("es6/**/*.js" )
.pipe(babel())
.pipe(gulp.dest("dist"));
// исходный код для браузера
gulp.src("public/es6/**/*.js")
.pipe(babel())
.pipe(gulp.dest("public/dist"));
});