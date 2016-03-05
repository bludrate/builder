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
      watch: true
    }
  ]
};
