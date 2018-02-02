const gulp = require('gulp') ;
const sass = require('gulp-sass') ;
const babel = require('gulp-babel');
const browserSync = require('browser-sync');
    gulp.task ( 'default' , function(){
        //�������� ��� ��� node
        gulp.src("es6/**/*.js" )
        .pipe(babel())
        .pipe(gulp.dest("dist"));
        // �������� ��� ��� ��������
    gulp.src("public/es6/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest("public/dist"));
});
    gulp.task ( 'sass' , function(){
     return gulp.src("sass/**/*.sass")
         .pipe(sass())
         .pipe(gulp.dest("css"))
         .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
    });
gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browser Sync
        server: { // Определяем параметры сервера
            baseDir: "./" // Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    });
});
gulp.task('watch', ['browser-sync','default', 'sass'], function() {
    gulp.watch('sass/**/*.sass', ['sass']); // Наблюдение за sass файлами в папке sass
    gulp.watch('*.html', browserSync.reload); // Наблюдение за HTML файлами в корне проекта
    gulp.watch('dist/**/*.js', browserSync.reload); // Наблюдение за JS файлами в папке js
});