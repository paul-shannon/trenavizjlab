var widgets = require('@jupyter-widgets/base');
var _ = require('lodash');


// Custom Model. Custom widgets models must at least provide default values
// for model attributes, including
//
//  - `_view_name`
//  - `_view_module`
//  - `_view_module_version`
//
//  - `_model_name`
//  - `_model_module`
//  - `_model_module_version`
//
//  when different from the base class.

// When serialiazing the entire widget state for embedding, only values that
// differ from the defaults will be specified.
var trenaVizModel = widgets.DOMWidgetModel.extend({
    defaults: _.extend(widgets.DOMWidgetModel.prototype.defaults(), {
        _model_name : 'trenaVizModel',
        _view_name : 'trenaVizView',
        _model_module : 'trenavizjlab',
        _view_module : 'trenavizjlab',
        _model_module_version : '0.1.0',
        _view_module_version : '0.1.0',
        value : 'Hello trenavizjlab!'
    })
});


// Custom View. Renders the widget model.
var trenaVizView = widgets.DOMWidgetView.extend({
    render: function() {
        this.value_changed();
        this.model.on('change:value', this.value_changed, this);
    },

    value_changed: function() {
        this.el.textContent = this.model.get('value');
    }
});


module.exports = {
    trenaVizModel : trenaVizModel,
    trenaVizView : trenaVizView
};
