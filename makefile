all: build install run

build:
	python setup.py build
	pip install -e .

install:
	jupyter nbextension install --py --symlink --sys-prefix trenavizjlab
	jupyter nbextension enable --py --sys-prefix trenavizjlab
	jupyter labextension install js

run:
	jupyter lab


