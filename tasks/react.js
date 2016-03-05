'use strict';

var Task = require( './task' );
var react = require( 'gulp-react' );

var React = Task.createChild();

React.prototype.main = function( stream ) {
  return stream.pipe( react() );
};

module.exports = React;
