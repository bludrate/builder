'use strict';

//Task for process styles
module.exports = {
  'default': [
    {
      task: 'styles',
      type: 'stylus', //type of pre processor (less, stylus  available)
      src: './src/styles/*.styl',
      concat: 'common.css',
      dest: './build/styles/',
      autoprefixer: true,
      sourcemaps: true,
      compress: true,
      watch: true
    },

    //Another example
    {
      task: 'styles',
      type: 'stylus', //type of pre processor (less, stylus  available)
      src: './src/styles/common.styl',
      dest: './build/styles/',
      watch: {
        //We need to watch all .styl files
        src: './src/styles/**/*.styl'
      }
    }
  ]
};
