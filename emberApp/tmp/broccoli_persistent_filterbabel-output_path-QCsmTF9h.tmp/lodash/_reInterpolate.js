define("lodash/_reInterpolate", ["exports"], function (exports) {
  /** Used to match template delimiters. */
  "use strict";

  var reInterpolate = /<%=([\s\S]+?)%>/g;

  exports["default"] = reInterpolate;
});