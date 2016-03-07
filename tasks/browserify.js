'use strict';

var Task = require( './task' );
var browserify = require('gulp-browserify');

var React = Task.createChild();

React.prototype.main = function( stream ) {
  return stream.pipe( browserify( this.config.opts ) );
};

module.exports = React;
