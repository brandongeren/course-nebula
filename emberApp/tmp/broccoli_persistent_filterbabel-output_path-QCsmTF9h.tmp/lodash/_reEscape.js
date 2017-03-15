define("lodash/_reEscape", ["exports"], function (exports) {
  /** Used to match template delimiters. */
  "use strict";

  var reEscape = /<%-([\s\S]+?)%>/g;

  exports["default"] = reEscape;
});