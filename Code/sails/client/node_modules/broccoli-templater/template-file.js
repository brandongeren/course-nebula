var templater = require('lodash.template');
var fs = require('fs');

module.exports = TemplateFile;

function TemplateFile(path, type, stat) {
  this.path = path;
  this.type = type;
  this.stat = stat;
}

TemplateFile.prototype.equal = function(file) {
  // key represents a file, diff the file
  if (this.type       === file.type &&
      this.path       === file.path &&
      this.stat.mode  === file.stat.mode &&
      this.stat.size  === file.stat.size &&
      this.type === 'directory' ? true : this.stat.mtime.getTime() === file.stat.mtime.getTime()) {
    return true;
  }
};

TemplateFile.prototype.template = function(variables) {
  this.template = templater(fs.readFileSync(this.path));
  return this.template(variables);
};
