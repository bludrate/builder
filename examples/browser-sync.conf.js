'use strict';

module.exports = {
  'default': [
    // All this object will be passed to browser-sync plugin
    // For more options - see http://www.browsersync.io/docs/options/
    {
      task: 'browser-sync',
      //Open browser
      open: true,
      startPath: '/src',
      server: {
        baseDir: './'
      },
      //Files for watch
      files: [ './src/js/**/*.js', './src/styles/common.css' ],
      reloadDelay: 10
    }
  ]
};
