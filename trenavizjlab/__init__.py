from ._version import version_info, __version__

from .trenaviz import *

def _jupyter_nbextension_paths():
    return [{
        'section': 'notebook',
        'src': 'static',
        'dest': 'trenavizjlab',
        'require': 'trenavizjlab/extension'
    }]
