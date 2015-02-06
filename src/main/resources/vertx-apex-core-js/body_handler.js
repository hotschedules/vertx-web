/*
 * Copyright 2014 Red Hat, Inc.
 *
 * Red Hat licenses this file to you under the Apache License, version 2.0
 * (the "License"); you may not use this file except in compliance with the
 * License.  You may obtain a copy of the License at:
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */

/** @module vertx-apex-core-js/body_handler */
var utils = require('vertx-js/util/utils');
var RoutingContext = require('vertx-apex-core-js/routing_context');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JBodyHandler = io.vertx.ext.apex.core.BodyHandler;

/**

 @class
*/
var BodyHandler = function(j_val) {

  var j_bodyHandler = j_val;
  var that = this;

  /**

   @public
   @param context {RoutingContext} 
   */
  this.handle = function(context) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0]._jdel) {
      j_bodyHandler.handle(context._jdel);
    } else utils.invalidArgs();
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_bodyHandler;
};

/**

 @memberof module:vertx-apex-core-js/body_handler
 @param bodyLimit {number} 
 @param uploadsDirectory {string} 
 @return {BodyHandler}
 */
BodyHandler.bodyHandler = function() {
  var __args = arguments;
  if (__args.length === 0) {
    return new BodyHandler(JBodyHandler.bodyHandler());
  }else if (__args.length === 1 && typeof __args[0] ==='number') {
    return new BodyHandler(JBodyHandler.bodyHandler(__args[0]));
  }else if (__args.length === 1 && typeof __args[0] === 'string') {
    return new BodyHandler(JBodyHandler.bodyHandler(__args[0]));
  }else if (__args.length === 2 && typeof __args[0] ==='number' && typeof __args[1] === 'string') {
    return new BodyHandler(JBodyHandler.bodyHandler(__args[0], __args[1]));
  } else utils.invalidArgs();
};

// We export the Constructor function
module.exports = BodyHandler;