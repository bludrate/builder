'use strict';

module.exports = {
  'default': [
    {
      task: 'js',
      src: './src/*.js',
      concat: 'main.js',
      pre: function( stream ) {
        //code for process stream before main code
      },
      post: function( stream ) {
        //code for process stream after main code
      },
      dest: './build/js',
      minify: true,
      sourcemaps: true,
      watch: true
    }
  ]
};
