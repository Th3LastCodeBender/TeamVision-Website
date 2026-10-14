TSC := npx -y -p typescript tsc

all: scripts.js

scripts.js: texts.ts scripts.ts tsconfig.json
	$(TSC) -p .

watch:
	$(TSC) -p . --watch

clean:
	rm -f scripts.js texts.js

re: clean all

.PHONY: all watch clean
