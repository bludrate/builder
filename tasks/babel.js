'use strict';

var Task = require( './task' );
var babel = require( 'gulp-babel' );

var Babel = Task.createChild();

Babel.prototype.main = function( stream ) {
  return stream.pipe( babel() );
};

module.exports = Babel;
