'use strict';

var browserSync = require( 'browser-sync' ).create();
var extend = require( '../util/extend' );

/**
 * Browser Sync task
 * @param config {Object} - configurations for task
 * @param prevStream {Stream} - stream of previous task
 * @param nextTask
 * @returns {Stream}
 */
function BrowserSync( config, prevStream, nextTask ) {
  this.config = extend( {
    ghostMode: false,
    open: false,
    notify: false
  }, config );
  this.prevStream = prevStream;
  this.nextTask = nextTask;
}

BrowserSync.prototype.run = function() {
  browserSync.init( this.config );
};

module.exports = BrowserSync;
