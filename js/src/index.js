// Entry point for the notebook bundle containing custom model definitions.

// Export widget models and views, and the npm package version number.
module.exports = require('./trenaviz.js');
module.exports['version'] = require('../package.json').version;
