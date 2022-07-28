'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));


gulp.task('sass', function() {

    return gulp.src('sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css/'));

});

// gulp.task('clean', () => {
//     return del([
//         'css/custom.css',
//     ]);
// });

// gulp.task('default', gulp.series(['clean', 'styles']));

gulp.task('watch', () =>  {
    gulp.watch('sass/*.scss', gulp.series('sass'));
});



