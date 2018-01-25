var extension = require('./index');
var base = require('@jupyter-widgets/base');

/**
 * Register the widget.
 */
module.exports = {
  id: 'trenavizjlab',
  requires: [base.IJupyterWidgetRegistry],
  activate: function(app, widgets) {
      widgets.registerWidget({
          name: 'trenavizjlab',
          version: extension.version,
          exports: extension
      });
    },
  autoStart: true
};
