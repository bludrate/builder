'use strict';

//Task for precompile riot templates
module.exports = {
  'default': [
    {
      task: 'riot',
      src: './src/**/*.tag',
      dest: './src/js',
      concat: 'widgets.js',
      watch: true
    }
  ]
};
