/* jshint node: true */
'use strict';
var stew = require('broccoli-stew');
var Filter = require('broccoli-filter');
var TemplateFile = require('./template-file');
var p = require('path');
var fs = require('fs');

module.exports = Template;

function Template(inputTree, templatePath, variablesFn, options) {
  Filter.call(this, inputTree, options);

  this.templatePath = templatePath;
  this.variablesFn = variablesFn;
  this._template = undefined;
}

Template.prototype = Object.create(Filter.prototype);
Template.prototype.extensions = ['js'];
Template.prototype.currentTemplateFile = function() {
  var stats = fs.statSync(this.templatePath);

  return new TemplateFile(this.templatePath, stats.isFile() ? 'file' : 'directory', stats);
};

Template.prototype.processString = function(file, relativePath) {
  return this._template.template(this.variablesFn(file, relativePath));
};

Template.prototype.isTemplatePath = function(path) {
  return this.templatePath === '/' + path;
};

Template.prototype.canProcessFile = function(relativePath) {
  if (this.isTemplatePath(relativePath)) { return true; }

  return Filter.prototype.canProcessFile.call(this, relativePath);
};

Template.prototype.processAndCacheFile = function(srcDir, destDir, relativePath) {
  if (this.isTemplatePath(relativePath)) { return; }

  if (this._template === undefined) {
    this._template = this.currentTemplateFile();
  } else {
    var newTemplateFile = this.currentTemplateFile();

    if (!newTemplateFile.equal(this._template)) {
      this._template = newTemplateFile;
      this.flushCache();
    }
  }

  return Filter.prototype.processAndCacheFile.call(this, srcDir, destDir, relativePath);
};

Template.prototype.flushCache = function() {
  delete this._cache;
};
