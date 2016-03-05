'use strict';

var stylus = require( 'gulp-stylus' ),
  less = require( 'gulp-less' ),
  extend = require( '../util/extend' ),
  autoprefixer = require( 'gulp-autoprefixer' ),
  Task = require( './task' );

var Styles = Task.createChild( function() {
  this.config = extend( {
    compress: false
  }, this.config );
} );

Styles.prototype.main = function( stream ) {
  switch ( this.config.type ) {
    case 'stylus':
      stream = stream.pipe( stylus( this.config ) );
      break;
    case 'less':
      stream = stream.pipe( less( this.config ) );
      break;
  }

  if ( this.config.autoprefixer ) {
    var settings = typeof this.config.autoprefixer === 'object' ? this.config.autoprefixer : null;

    stream = stream.pipe( autoprefixer( settings ) );
  }

  return stream;
};

module.exports = Styles;
