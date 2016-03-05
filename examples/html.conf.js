'use strict';

module.exports = {
  'default': [
    {
      task: 'html',
      src: './src/index.html',
      replace: {
        // For more options see https://github.com/VFK/gulp-html-replace
        js: 'js/main.js'
      },
      minify: true, // or you can pass object with options for https://www.npmjs.com/package/gulp-minify-html plugin
      dest: './build',
      watch: true
    }
  ]
};
