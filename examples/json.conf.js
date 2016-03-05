'use strict';

//Task for minify json
module.exports = {
  'default': [
    {
      task: 'json',
      src: './src/*.json',
      dest: 'build/',
      watch: true
    }
  ]
};
