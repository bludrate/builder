'use strict';

var replace = require( 'gulp-replace' );
var Task = require( './task' );

var Replace = Task.createChild();

Replace.prototype.main = function( stream ) {
  return stream.pipe( replace( this.config.search, this.config.replace ) );
};

module.exports = Replace;
