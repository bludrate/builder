'use strict';

module.exports = {
  'default': [
    {
      task: 'clean',
      //Will clean everything in src
      src: 'build',
      //Pass force to run task with force flag
      force: true,
      watch: true
    }
  ]
};
