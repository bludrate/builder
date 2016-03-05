'use strict';

var templateCache = require( 'gulp-angular-templatecache' );
var Task = require( './task' );

var Angular = Task.createChild();

Angular.prototype.main = function( stream ) {
  return stream.pipe( templateCache( this.config.fileName, this.config ) );
};

module.exports = Angular;
