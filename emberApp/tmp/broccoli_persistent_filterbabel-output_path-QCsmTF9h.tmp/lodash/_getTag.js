define('lodash/_getTag', ['exports', 'lodash/_DataView', 'lodash/_Map', 'lodash/_Promise', 'lodash/_Set', 'lodash/_WeakMap', 'lodash/_baseGetTag', 'lodash/_toSource'], function (exports, _lodash_DataView, _lodash_Map, _lodash_Promise, _lodash_Set, _lodash_WeakMap, _lodash_baseGetTag, _lodash_toSource) {
    'use strict';

    /** `Object#toString` result references. */
    var mapTag = '[object Map]',
        objectTag = '[object Object]',
        promiseTag = '[object Promise]',
        setTag = '[object Set]',
        weakMapTag = '[object WeakMap]';

    var dataViewTag = '[object DataView]';

    /** Used to detect maps, sets, and weakmaps. */
    var dataViewCtorString = (0, _lodash_toSource['default'])(_lodash_DataView['default']),
        mapCtorString = (0, _lodash_toSource['default'])(_lodash_Map['default']),
        promiseCtorString = (0, _lodash_toSource['default'])(_lodash_Promise['default']),
        setCtorString = (0, _lodash_toSource['default'])(_lodash_Set['default']),
        weakMapCtorString = (0, _lodash_toSource['default'])(_lodash_WeakMap['default']);

    /**
     * Gets the `toStringTag` of `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */
    var getTag = _lodash_baseGetTag['default'];

    // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node < 6.
    if (_lodash_DataView['default'] && getTag(new _lodash_DataView['default'](new ArrayBuffer(1))) != dataViewTag || _lodash_Map['default'] && getTag(new _lodash_Map['default']()) != mapTag || _lodash_Promise['default'] && getTag(_lodash_Promise['default'].resolve()) != promiseTag || _lodash_Set['default'] && getTag(new _lodash_Set['default']()) != setTag || _lodash_WeakMap['default'] && getTag(new _lodash_WeakMap['default']()) != weakMapTag) {
        getTag = function (value) {
            var result = (0, _lodash_baseGetTag['default'])(value),
                Ctor = result == objectTag ? value.constructor : undefined,
                ctorString = Ctor ? (0, _lodash_toSource['default'])(Ctor) : '';

            if (ctorString) {
                switch (ctorString) {
                    case dataViewCtorString:
                        return dataViewTag;
                    case mapCtorString:
                        return mapTag;
                    case promiseCtorString:
                        return promiseTag;
                    case setCtorString:
                        return setTag;
                    case weakMapCtorString:
                        return weakMapTag;
                }
            }
            return result;
        };
    }

    exports['default'] = getTag;
});