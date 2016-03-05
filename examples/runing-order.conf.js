'use strict';

module.exports = {
  default: [
    {
      task: 'clean',
      src: 'build'
    },

    // Tasks in inner array will run's asynchronously
    [
      {
        task: 'styles',
        type: 'stylus',
        src: './src/styles/common.styl',
        dest: './build/styles/',
        autoprefixer: true,
        sourcemaps: true,
        compress: true
      },
      {
        task: 'riot',
        src: './src/**/*.tag',
        dest: './src/js',
        concat: 'widgets.js'
      }
    ],
    {
      task: 'js',
      src: './src/*.js',
      concat: 'main.js',
      dest: './build/js',
      minify: true,
      sourcemaps: true
    }
  ]
};
