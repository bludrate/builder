'use strict';

module.exports = function() {
  return Array.prototype.reduce.call( arguments, function( prev, current ) {
    for ( var key in current ) {
      prev[ key ] = current[ key ];
    }

    return prev;
  } );
};
