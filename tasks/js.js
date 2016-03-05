'use strict';

var uglify = require( 'gulp-uglify' );
var Task = require( './task' );

var BuildJs = Task.createChild();

BuildJs.prototype.main = function( stream ) {
  if ( this.config.minify ) {
    // TODO: use minify params
    var settings = typeof this.config.minify === 'object' ? this.config.minify : null;

    stream = stream.pipe( uglify( settings ) );
  }

  return stream;
};

module.exports = BuildJs;
