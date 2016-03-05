'use strict';

module.exports = {
  // Default task
  'default': [
    {
      task: 'clean',
      src: 'dest'
    },
    // Tasks in inner array will runs asynchronously
    [
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
        }
      },
      {
        task: 'js',
        src: [ './source1/*.js', './source2/*.js', '!./source2/not_used_script.js' ],
        dest: './dest',
        concat: 'all2.js',
        sourcemaps: true,
        minify: true,
        watch: true
      }
    ],
    {
      // http://www.browsersync.io/docs/options/
      task: 'browser-sync',
      //watch files
      files: [ './**/*.js', './**/*.css' ],
      server: './dest'
    }
  ]
};
