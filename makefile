all: buildSource install_nb run_nb

buildSource:
	python setup.py build
	pip install -e .

install_nb:
	jupyter nbextension install --py --symlink --sys-prefix trenavizjlab
	jupyter nbextension enable --py --sys-prefix trenavizjlab

install_lab:
	jupyter labextension install js

run_nb:
	jupyter notebook

run_lab:
	jupyter lab


