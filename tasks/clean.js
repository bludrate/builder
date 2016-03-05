'use strict';

var Task = require( './task' );
var clean = require( 'gulp-clean' );
var extend = require( '../util/extend' );

var Clean = Task.createChild( function() {
  this.config = extend( {
    gulpSrc: {
      read: false
    },
    _noDest: true
  }, this.config );
} );

Clean.prototype.main = function( stream ) {
  return stream.pipe( clean( { force: this.config.force } ) )
    // fix on end
    .on( 'data', function() {
    } );
};

module.exports = Clean;
