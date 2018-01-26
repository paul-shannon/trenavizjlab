import ipywidgets as widgets
from traitlets import Unicode

@widgets.register
class trenaViz(widgets.DOMWidget):
    """An example widget."""
    _view_name = Unicode('trenaVizView').tag(sync=True)
    _model_name = Unicode('trenaVizModel').tag(sync=True)
    _view_module = Unicode('trenavizjlab').tag(sync=True)
    _model_module = Unicode('trenavizjlab').tag(sync=True)
    _view_module_version = Unicode('^0.1.0').tag(sync=True)
    _model_module_version = Unicode('^0.1.0').tag(sync=True)
    value = Unicode('Hello trenaviz.py 407p!').tag(sync=True)
