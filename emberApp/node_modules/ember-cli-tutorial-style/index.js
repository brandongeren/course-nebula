/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-tutorial-style',

  included: function (app) {
    app.import('vendor/ember-tutorial.css');
  }
};
