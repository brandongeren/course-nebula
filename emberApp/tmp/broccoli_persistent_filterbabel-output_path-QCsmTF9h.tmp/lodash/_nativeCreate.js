define('lodash/_nativeCreate', ['exports', 'lodash/_getNative'], function (exports, _lodash_getNative) {
  'use strict';

  /* Built-in method references that are verified to be native. */
  var nativeCreate = (0, _lodash_getNative['default'])(Object, 'create');

  exports['default'] = nativeCreate;
});