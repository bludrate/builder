'use strict';

var Task = require( './task' );
var htmlreplace = require( 'gulp-html-replace' );
var minifyHTML = require( 'gulp-minify-html' );

var Html = Task.createChild();

Html.prototype.main = function( stream ) {
  if ( this.config.replace ) {
    stream = stream.pipe( htmlreplace( this.config.replace ) );
  }

  if ( this.config.minify ) {
    var settings = typeof this.config.minify === 'object' ? this.config.minify : null;

    stream = stream.pipe( minifyHTML( settings ) );
  }

  return stream;
};

module.exports = Html;
