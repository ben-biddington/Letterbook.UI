# https://www.gnu.org/software/make/manual/make.html

.SILENT: 

# -O https://www.gnu.org/software/make/manual/html_node/Parallel-Output.html
MAKEFLAGS += -O -j 20 # https://www.gnu.org/software/make/manual/html_node/Parallel.html

default: typecheck test webpack

typecheck:
	npm run typecheck

lint: 
	yarn lint

test: typecheck
	yarn test

webpack: 
	NODE_ENV=development webpack --config ./config/webpack/development.js