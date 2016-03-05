'use strict';

module.exports = {
  'default': [
    {
      task: 'copy',
      // When gulp coping images - it not always returns 'end' event of stream
      // Due to this bug coping images will be always async task
      _imgFix: true,
      src: './src/img/**',
      dest: './build/img',
      watch: true
    }
  ]
};
