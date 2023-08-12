# Installation

```
nvm install `cat .nvmrc`
```

```
npm i
```

## Errors

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