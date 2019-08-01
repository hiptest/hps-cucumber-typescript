default: test
.PHONY: default

install_prerequisites:
	npm install -g typescript
	npm install
.PHONY: install_prerequisites

generate_tests:
	hiptest-publisher -c cucumber-typescript.conf -t "$(SECRET_TOKEN)" --without=actionwords
.PHONY: generate_tests

test: install_prerequisites
	npm run test
.PHONY: test
