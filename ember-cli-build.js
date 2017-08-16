/* eslint-env node */
'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
  });
  app.import('bower_components/moment/moment.js');
  app.import('vendor/fontello/fontello.css');
  app.import('vendor/fontello/font/fontello.tff', {
    destDir: 'assets/font'
  });
  app.import('vendor/fontello/font/fontello.eot', {
    destDir: 'assets/font'
  });
  app.import('vendor/fontello/font/fontello.svg', {
    destDir: 'assets/font'
  });
  app.import('vendor/fontello/font/fontello.woff', {
    destDir: 'assets/font'
  });
  app.import('vendor/fontello/font/fontello.woff2', {
    destDir: 'assets/font'
  });

  app.import('vendor/basscss.min.css');

  return app.toTree();
};
