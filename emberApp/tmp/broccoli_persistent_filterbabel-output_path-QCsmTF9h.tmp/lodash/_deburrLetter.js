define('lodash/_deburrLetter', ['exports', 'lodash/_basePropertyOf'], function (exports, _lodash_basePropertyOf) {
  'use strict';

  /** Used to map Latin Unicode letters to basic Latin letters. */
  var deburredLetters = {
    // Latin-1 Supplement block.
    '\xc0': 'A', '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
    '\xe0': 'a', '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
    '\xc7': 'C', '\xe7': 'c',
    '\xd0': 'D', '\xf0': 'd',
    '\xc8': 'E', '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
    '\xe8': 'e', '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
    '\xcc': 'I', '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
    '\xec': 'i', '\xed': 'i', '\xee': 'i', '\xef': 'i',
    '\xd1': 'N', '\xf1': 'n',
    '\xd2': 'O', '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
    '\xf2': 'o', '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
    '\xd9': 'U', '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
    '\xf9': 'u', '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
    '\xdd': 'Y', '\xfd': 'y', '\xff': 'y',
    '\xc6': 'Ae', '\xe6': 'ae',
    '\xde': 'Th', '\xfe': 'th',
    '\xdf': 'ss',
    // Latin Extended-A block.
    'Ā': 'A', 'Ă': 'A', 'Ą': 'A',
    'ā': 'a', 'ă': 'a', 'ą': 'a',
    'Ć': 'C', 'Ĉ': 'C', 'Ċ': 'C', 'Č': 'C',
    'ć': 'c', 'ĉ': 'c', 'ċ': 'c', 'č': 'c',
    'Ď': 'D', 'Đ': 'D', 'ď': 'd', 'đ': 'd',
    'Ē': 'E', 'Ĕ': 'E', 'Ė': 'E', 'Ę': 'E', 'Ě': 'E',
    'ē': 'e', 'ĕ': 'e', 'ė': 'e', 'ę': 'e', 'ě': 'e',
    'Ĝ': 'G', 'Ğ': 'G', 'Ġ': 'G', 'Ģ': 'G',
    'ĝ': 'g', 'ğ': 'g', 'ġ': 'g', 'ģ': 'g',
    'Ĥ': 'H', 'Ħ': 'H', 'ĥ': 'h', 'ħ': 'h',
    'Ĩ': 'I', 'Ī': 'I', 'Ĭ': 'I', 'Į': 'I', 'İ': 'I',
    'ĩ': 'i', 'ī': 'i', 'ĭ': 'i', 'į': 'i', 'ı': 'i',
    'Ĵ': 'J', 'ĵ': 'j',
    'Ķ': 'K', 'ķ': 'k', 'ĸ': 'k',
    'Ĺ': 'L', 'Ļ': 'L', 'Ľ': 'L', 'Ŀ': 'L', 'Ł': 'L',
    'ĺ': 'l', 'ļ': 'l', 'ľ': 'l', 'ŀ': 'l', 'ł': 'l',
    'Ń': 'N', 'Ņ': 'N', 'Ň': 'N', 'Ŋ': 'N',
    'ń': 'n', 'ņ': 'n', 'ň': 'n', 'ŋ': 'n',
    'Ō': 'O', 'Ŏ': 'O', 'Ő': 'O',
    'ō': 'o', 'ŏ': 'o', 'ő': 'o',
    'Ŕ': 'R', 'Ŗ': 'R', 'Ř': 'R',
    'ŕ': 'r', 'ŗ': 'r', 'ř': 'r',
    'Ś': 'S', 'Ŝ': 'S', 'Ş': 'S', 'Š': 'S',
    'ś': 's', 'ŝ': 's', 'ş': 's', 'š': 's',
    'Ţ': 'T', 'Ť': 'T', 'Ŧ': 'T',
    'ţ': 't', 'ť': 't', 'ŧ': 't',
    'Ũ': 'U', 'Ū': 'U', 'Ŭ': 'U', 'Ů': 'U', 'Ű': 'U', 'Ų': 'U',
    'ũ': 'u', 'ū': 'u', 'ŭ': 'u', 'ů': 'u', 'ű': 'u', 'ų': 'u',
    'Ŵ': 'W', 'ŵ': 'w',
    'Ŷ': 'Y', 'ŷ': 'y', 'Ÿ': 'Y',
    'Ź': 'Z', 'Ż': 'Z', 'Ž': 'Z',
    'ź': 'z', 'ż': 'z', 'ž': 'z',
    'Ĳ': 'IJ', 'ĳ': 'ij',
    'Œ': 'Oe', 'œ': 'oe',
    'ŉ': "'n", 'ſ': 's'
  };

  /**
   * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
   * letters to basic Latin letters.
   *
   * @private
   * @param {string} letter The matched letter to deburr.
   * @returns {string} Returns the deburred letter.
   */
  var deburrLetter = (0, _lodash_basePropertyOf['default'])(deburredLetters);

  exports['default'] = deburrLetter;
});