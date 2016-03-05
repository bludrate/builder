#!/usr/bin/env node

'use strict';
var task = process.argv[ 2 ] || 'default', // What task list we're run
  configFile = process.env.PWD + '/' + 'bet-builder.conf.js', // path to config file
  requireDir = require( 'require-dir' ),
  configs = require( configFile ),
  tasks = requireDir( './tasks' );

function BetBuilder( configs, task ) {
  this.configs = this.prepareConfigs( configs, task );

  this.runTask( 0 );
}

BetBuilder.prototype.prepareConfigs = function( configs, task ) {
  function processArray( array ) {
    var res = [];

    array.forEach( function( item ) {
      if ( typeof item === 'string' ) {
        res = res.concat( configs[ item ] );
      } else {
        res.push( item );
      }
    } );

    return res;
  }

  return processArray( configs[ task ] );
};

/**
 * Run config tasks
 * @param i {Number} - index of task
 * @param [prevStream] {Stream} - stream of previous task
 */
BetBuilder.prototype.runTask = function( i, prevStream ) {
  var self = this;

  /**
   * Run next task
   * @param stream [Stream] - stream of previous task
   */
  function next( stream ) {
    if ( self.configs.length - 1 > i ) {
      self.runTask( ++i, stream );
    }
  }

  if ( self.configs[ i ] instanceof Array ) {
    // Create list of async streams
    var promises = self.configs[ i ].map( function( item ) {
      var task = new tasks[ item.task ]( item );
      var stream = task.run();
      // run async task
      return new Promise( function( resolve ) {
        if ( stream ) {
          stream.on( 'end', resolve );
        } else {
          resolve();
        }
      } );
    } );

    Promise.all( promises ).then( next );

  } else {
    var Task = tasks[ self.configs[ i ].task ];
    // Pass next for run next task on watch
    var task = new Task( self.configs[ i ], prevStream, next );
    var stream = task.run();

    // On finish task - run next task with stream of current task

    if ( stream && !stream._end ) {
      stream.on( 'end', next.bind( null, stream ) );
    } else {
      next( stream );
    }
  }
};

module.exports = new BetBuilder( configs, task );
