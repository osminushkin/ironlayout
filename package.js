Package.describe({
  name: 'polygonwood:layout',
  summary: 'Dynamic layouts which enable rendering dynamic templates into regions on a page.',
  version: '2.0.0',
  git: 'https://github.com/iron-meteor/iron-layout'
});

Package.onUse(function (api) {
  api.versionsFrom('3.0.2');

  // so our default_layout gets compiled
  api.use('templating');
  api.use('blaze');

  // some utils
  api.use('underscore');
  api.use('tracker'); // for Deps

  api.use('iron:core@1.0.11');
  api.imply('iron:core');

  // dynamic templates
  api.use('polygonwood:dynamic-template@2.0.0');

  // if you use iron-layout you should get iron-dynamic-template for free!
  api.imply('polygonwood:dynamic-template');

  // error messages to remove old packages
  api.use('cmather:blaze-layout@0.2.5', {weak: true});
  api.use('cmather:iron-layout@0.2.0', {weak: true});

  api.addFiles('version_conflict_errors.js');
  api.addFiles('default_layout.html');
  api.addFiles('layout.js');
});

Package.onTest(function (api) {
  api.versionsFrom('METEOR@0.9.2');

  api.use('polygonwood:layout');
  api.use('tinytest');
  api.use('test-helpers');
  api.use('templating');
  api.use('deps');

  api.addFiles('layout_test.html', 'client');
  api.addFiles('layout_test.js', 'client');
});
