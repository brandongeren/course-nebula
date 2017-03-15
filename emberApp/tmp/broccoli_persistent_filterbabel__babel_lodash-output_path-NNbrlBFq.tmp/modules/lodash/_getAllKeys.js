import baseGetAllKeys from './_baseGetAllKeys';
import getSymbols from './_getSymbols';
import keys from './keys';

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

export default getAllKeys;