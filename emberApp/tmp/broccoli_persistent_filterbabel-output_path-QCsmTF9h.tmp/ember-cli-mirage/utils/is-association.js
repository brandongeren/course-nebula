define('ember-cli-mirage/utils/is-association', ['exports', 'lodash/isPlainObject'], function (exports, _lodashIsPlainObject) {
  'use strict';

  exports['default'] = function (object) {
    return (0, _lodashIsPlainObject['default'])(object) && object.__isAssociation__ === true;
  };
});