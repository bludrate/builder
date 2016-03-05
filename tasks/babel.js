'use strict';

var Task = require( './task' );
var babel = require( 'gulp-babel' );
var extend = require( '../util/extend' );

var Babel = Task.createChild();

Babel.prototype.main = function( stream ) {
  var opts = extend( { presets: ['es2015'] }, this.config.opts );
  return stream.pipe( babel( opts ) );
};

module.exports = Babel;
