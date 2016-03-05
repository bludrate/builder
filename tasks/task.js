'use strict';

var gulp = require( 'gulp' );
var watch = require( 'gulp-watch' );
var sourcemaps = require( 'gulp-sourcemaps' );
var concat = require( 'gulp-concat' );
var extend = require( '../util/extend' );
var through = require( 'through2' );

/**
 * Main Task class
 * @param config {Object} - configurations for task
 * @param prevStream {Stream} - stream of previous task
 * @param nextTask
 * @returns {Stream}
 */
function Task( config, prevStream, nextTask ) {
  this.config = config;
  this.prevStream = prevStream;
  this.nextTask = nextTask;
}

/**
 * Setup file watcher for current task
 * @returns {boolean} true - just watch. false - init run
 */
Task.prototype.watch = function() {
  if ( this.config.watch ) {
    // Default options
    var src = this.config.src,
    // Are we need run build on start ?
      initRun = true,
    // Run next task with this stream on changes ?
      runNext = false,

      options = {
        verbose: true
      };

    // Process object with parameters
    if ( typeof this.config.watch === 'object' ) {
      src = this.config.watch.src || src;
      initRun = this.config.watch.initRun;
      runNext = this.config.watch.runNext;
      extend( options, this.config.watch );
    }

    watch( src, options, this.build.bind( this, runNext ) );

    // Don't build task on run
    if ( initRun === false ) {
      return true;
    }
  }

  return false;
};

/**
 * Start task. Includes watches and build
 * @returns {Stream}
 */
Task.prototype.run = function() {
  if ( this.watch() ) {
    return;
  }

  return this.build();
};

/**
 * Build src files and put it to dest
 * @returns {Stream}
 */
Task.prototype.build = function( runNext ) {
  var stream = this.config.src ? gulp.src( this.config.src, this.config.gulpSrc ) : this.prevStream;

  stream.on( 'error', function( error ) {
    console.log( 'error while building ', this.config.name + ': ', error );
  }.bind( this ) );

  if ( this.config.pre ) {
    stream = stream.pipe( through.obj( this.config.pre ) );
  }

  if ( this.config.sourcemaps ) {
    var sourcemapsInitConf = typeof this.config.sourcemaps === 'object' ?
      this.config.sourcemaps.init : null;

    stream = stream.pipe( sourcemaps.init( sourcemapsInitConf ) );
  }

  if ( this.config.concat )
    stream = stream.pipe( concat( this.config.concat ) );

  stream = this.main( stream );

  if ( this.config.sourcemaps ) {
    var sourcemapsWriteDest = typeof this.config.sourcemaps === 'object' ?
      this.config.sourcemaps.dest : '.';

    stream = stream.pipe( sourcemaps.write( sourcemapsWriteDest ) );
  }

  if ( this.config.post ) {
    stream = stream.pipe( through.obj( this.config.post ) );
  }

  if ( this.config.dest ) {
    stream = stream.pipe( gulp.dest( this.config.dest ) );
  } else {
    if ( !this.config._noDest ) {
      stream._end = true;
    }
  }

  if ( runNext ) {
    this.nextTask( stream );
  }

  // gulp don't end stream while coping images
  return !this.config._imgFix && stream;
};

/**
 * Main part of build
 * @param stream {Stream}
 * @returns {Stream}
 */
Task.prototype.main = function( stream ) {
  return stream;
};

/**
 * Static method for create inherit class
 * @param constructor
 * @returns {Child}
 */
Task.createChild = function( constructor ) {
  function Child() {
    Task.apply( this, arguments );

    if ( constructor ) {
      constructor.apply( this, arguments );
    }
  }

  Child.prototype = Object.create( Task.prototype );
  Child.prototype.constructor = Child;

  return Child;
};

module.exports = Task;
