'use strict';

var Task = require( './task' );
var babel = require( 'gulp-babel' );
var extend = require( '../util/extend' );

var Babel = Task.createChild();

Babel.prototype.main = function( stream ) {
  return stream.pipe( babel( this.config.opts ) );
};

module.exports = Babel;
