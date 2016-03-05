'use strict';

var jsonminify = require( 'gulp-jsonminify' );
var Task = require( './task' );

var Json = Task.createChild();

Json.prototype.main = function( stream ) {
  return stream.pipe( jsonminify() );
};

module.exports = Json;
