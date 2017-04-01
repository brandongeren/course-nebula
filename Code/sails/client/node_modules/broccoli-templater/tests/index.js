var chai = require('chai');
var expect = chai.expect;
var broccoli = require('broccoli');
var Template = require('..');
var walkSync = require('walk-sync');
var fs = require('fs');

chai.use(require('chai-fs'));

describe('BroccoliTemplater', function() {
  describe('builds', function() {
    var builder;

    function template(tree, templatePath, callbackForValues) {
      builder = new broccoli.Builder(new Template(tree, templatePath , callbackForValues));
      return builder;
    }

    function filesWithin(result) {
      return walkSync(result.directory).filter(function(file) {
        return file.charAt(file.length - 1) !== '/'
      }).map(function(p) {
        return p.replace(__dirname, '')
      });
    }

    after(function() {
      builder.cleanup();
    });

    it('basic templating', function() {
      var tree = template(__dirname + '/fixtures/one', __dirname + '/fixtures/templates/module-template.js.t', function(content, relativePath) {
        return {
          moduleBody: content
        };
      })

      return tree.build().then(function(result) {
        var path = result.directory + '/foo.js';

        expect(path).to.be.a.file;
        expect(path).to.have.content.that.match(/'fetch\/ajax'/);
      });
    });


  });
});
