'use strict';

module.exports = {
  'default': [
    {
      task: 'js',
      src: './src/*.js',
      concat: 'main.js',
      dest: './build/js',
      minify: true,
      sourcemaps: true,
      //will watch for './src/*.js' and re-run this task
      watch: true
    },

    {
      task: 'styles',
      // type of preproccessor
      type: 'stylus',
      src: './src/styles/common.styl',
      dest: './dest/styles',
      autoprefixer: true,
      watch: {
        // watch all styles file, but build only one
        src: './src/styles/**/*.styl'

        //For more parameters - see https://www.npmjs.com/package/gulp-watch
      }
    }
  ]
};
