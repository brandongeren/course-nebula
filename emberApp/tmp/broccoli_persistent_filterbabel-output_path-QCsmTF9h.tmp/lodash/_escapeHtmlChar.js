define('lodash/_escapeHtmlChar', ['exports', 'lodash/_basePropertyOf'], function (exports, _lodash_basePropertyOf) {
  'use strict';

  /** Used to map characters to HTML entities. */
  var htmlEscapes = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };

  /**
   * Used by `_.escape` to convert characters to HTML entities.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */
  var escapeHtmlChar = (0, _lodash_basePropertyOf['default'])(htmlEscapes);

  exports['default'] = escapeHtmlChar;
});