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

### Webpack does not build fully on Windows

Aug-2023

```
make webpack
```

This does not build all the required files because of file globbing differences on Windows.

```js
// config/webpack/shared.js
const extensionGlob = `**/*{${settings.extensions.join(',')}}*`;
const entryPath = join(settings.source_path, settings.source_entry_path);
const packPaths = sync(join(entryPath, extensionGlob));

console.log({ entryPath, extensionGlob, packPaths });
```

Prints:

```
{
  entryPath: 'app\\javascript\\packs',
  extensionGlob: '**/*{.mjs,.js,.jsx,.ts,.tsx,.sass,.scss,.css,.module.sass,.module.scss,.module.css,.png,.svg,.gif,.jpeg,.jpg}*',
  packPaths: []
}
```

`packPaths` should not be empty, it should have these files in it:

```
$ ls app/javascript/packs
admin.jsx  application.js  error.js  mailer.js  public-path.js  public.jsx  remote_interaction_helper.ts  share.jsx  sign_up.js  two_factor_authentication.js
```

Webpack has no entrypoints and as a result, `public/packs/manifest.json` is missing lots of entries.

Tried this but it had no effect:

```ts
// config/webpack/shared.js
const packPaths = sync(join(entryPath, extensionGlob), { posix: true });
```

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
