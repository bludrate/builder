'use strict';

var Task = require( './task' );
var browserify = require('browserify');

var React = Task.createChild();

React.prototype.main = function( stream ) {
  return stream.pipe( babelify( this.config.opts ) );
};

module.exports = React;
