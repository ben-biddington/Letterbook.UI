Designed to go with [Letterbook server](https://github.com/Letterbook/Letterbook), this is just the frontend code from [Mastodon](https://github.com/mastodon/mastodon).

# Installation

```
nvm install `cat .nvmrc`
```

```
npm i --legacy-peer-deps && npm install babel-cli -g --legacy-peer-deps
```

```
make test
```

## Build for web

```
make webpack
```

The packed javascript can be found at `public/packs`.

## Start server

### Build it

```
make server-build
```

### Run it

```
./server
```

## Troubleshooting

### Problems with eslint

Sometimes you get errors due to caching. For example, I installed `express` once, ran `make` but then reverted the `express` install.

I kept getting this even after revert.

```
$ eslint . --ext=.js,.jsx,.ts,.tsx --cache --report-unused-disable-directives

/home/ben/sauce/Letterbook.UI/streaming/index.js
  8:17  error  '@types/express' should be listed in the project's dependencies, not devDependencies  import/no-extraneous-dependencies

✖ 1 problem (1 error, 0 warnings)

```

Solution is to try and delete `.eslintcache`
