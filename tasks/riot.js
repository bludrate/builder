'use strict';

var riot = require( 'gulp-riot' );
var extend = require( '../util/extend' );
var Task = require( './task' );

var Riot = Task.createChild( function() {
  this.config = extend( {
    compact: true
  }, this.config );
} );

Riot.prototype.main = function( stream ) {
  stream = stream.pipe( riot( this.config ) );

  return stream;
};

module.exports = Riot;
