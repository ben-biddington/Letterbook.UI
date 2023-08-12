# Installation

```
nvm install `cat .nvmrc`
```

```
npm i
```

## Errors

### Could not resolve dependency ... peer react@"^0.14.0 || ^15.0.0-0 || ^16.0.0 || ^17.0.0" from emoji-mart@3.0.1-j

```
npm ERR! code ERESOLVE
npm ERR! ERESOLVE unable to resolve dependency tree
npm ERR!
npm ERR! While resolving: @mastodon/mastodon@undefined
npm ERR! Found: react@18.2.0
npm ERR! node_modules/react
npm ERR!   react@"^18.2.0" from the root project
npm ERR!
npm ERR! Could not resolve dependency:
npm ERR! peer react@"^0.14.0 || ^15.0.0-0 || ^16.0.0 || ^17.0.0" from emoji-mart@3.0.1-j
npm ERR! node_modules/emoji-mart
npm ERR!   emoji-mart@"npm:emoji-mart-lazyload@latest" from the root project
npm ERR!
npm ERR! Fix the upstream dependency conflict, or retry
npm ERR! this command with --force, or --legacy-peer-deps
npm ERR! to accept an incorrect (and potentially broken) dependency resolution.
npm ERR!
npm ERR! See /home/ben/.npm/eresolve-report.txt for a full report.

```

```
node -v && npm -v
v16.20.2
8.19.4

```

Resolved by:

```
npm i --legacy-peer-deps
```

### yarn: not found

```
npm run test

> test
> yarn lint && yarn run typecheck && yarn jest

sh: 1: yarn: not found

```

Resolved by:

```
npm i -g yarn
```

### npm run test fails

```
ben@bang:~/sauce/Letterbook.UI$ npm run test

> test
> yarn lint && yarn run typecheck && yarn jest

yarn run v1.22.19
$ yarn lint:js && yarn lint:json && yarn lint:sass && yarn lint:yml
$ eslint . --ext=.js,.jsx,.ts,.tsx --cache --report-unused-disable-directives

/home/ben/sauce/Letterbook.UI/app/javascript/hooks/useHovering.ts
  0:0  error  Parsing error: ESLint was configured to run on `<tsconfigRootDir>/app/javascript/hooks/useHovering.ts` using `parserOptions.project`: <tsconfigRootDir>/tsconfig.json
However, that TSConfig does not include this file. Either:
- Change ESLint's list of included files to not include this file
- Change that TSConfig to include this file
- Create a new TSConfig that includes this file and include it in your parserOptions.project
See the typescript-eslint docs for more info: https://typescript-eslint.io/linting/troubleshooting#i-get-errors-telling-me-eslint-was-configured-to-run--however-that-tsconfig-does-not--none-of-those-tsconfigs-include-this-file

/home/ben/sauce/Letterbook.UI/app/javascript/mastodon/components/edited_timestamp/containers/dropdown_menu_container.js
  4:1   error  There should be at least one empty line between import groups                                              import/order
  5:1   error  `mastodon/components/dropdown_menu` import should occur before import of `mastodon/actions/dropdown_menu`  import/order
  5:26  error  Missing file extension for "mastodon/components/dropdown_menu"                                             import/extensions
  5:26  error  Unable to resolve path to module 'mastodon/components/dropdown_menu'                                       import/no-unresolved

```
