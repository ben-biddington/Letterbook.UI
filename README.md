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

[View in browser](http://localhost:9999/home).

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

This gets further:

```ts
// config/webpack/shared.js
packPaths = readdirSync(entryPath).map((it) => join(entryPath, it));
```

But then fails like:

```
ERROR in ./app/javascript/mastodon/components/badge.jsx 43:29-39
"export 'ReactComponent' (imported as 'GroupsIcon') was not found in '@material-design-icons/svg/outlined/group.svg'
    at HarmonyImportSpecifierDependency._getErrors (C:\sauce\Letterbook.UI\node_modules\webpack\lib\dependencies\HarmonyImportSpecifierDependency.js:109:11)
    at HarmonyImportSpecifierDependency.getErrors (C:\sauce\Letterbook.UI\node_modules\webpack\lib\dependencies\HarmonyImportSpecifierDependency.js:68:16)
    at Compilation.reportDependencyErrorsAndWarnings (C:\sauce\Letterbook.UI\node_modules\webpack\lib\Compilation.js:1463:22)
    at C:\sauce\Letterbook.UI\node_modules\webpack\lib\Compilation.js:1258:10
    at AsyncSeriesHook.eval [as callAsync] (eval at create (C:\sauce\Letterbook.UI\node_modules\webpack\node_modules\tapable\lib\HookCodeFactory.js:33:10), <anonymous>:15:1)
    at AsyncSeriesHook.lazyCompileHook (C:\sauce\Letterbook.UI\node_modules\webpack\node_modules\tapable\lib\Hook.js:154:20)
    at Compilation.finish (C:\sauce\Letterbook.UI\node_modules\webpack\lib\Compilation.js:1253:28)
    at C:\sauce\Letterbook.UI\node_modules\webpack\lib\Compiler.js:672:17
    at _done (eval at create (C:\sauce\Letterbook.UI\node_modules\webpack\node_modules\tapable\lib\HookCodeFactory.js:33:10), <anonymous>:9:1)
    at eval (eval at create (C:\sauce\Letterbook.UI\node_modules\webpack\node_modules\tapable\lib\HookCodeFactory.js:33:10), <anonymous>:104:22)
    at C:\sauce\Letterbook.UI\node_modules\webpack\lib\Compilation.js:1185:12
    at C:\sauce\Letterbook.UI\node_modules\webpack\lib\Compilation.js:1097:9
    at processTicksAndRejections (node:internal/process/task_queues:78:11)
 @ ./app/javascript/mastodon/features/account/components/header.jsx
 @ ./app/javascript/mastodon/features/account_timeline/components/header.jsx
 @ ./app/javascript/mastodon/features/account_timeline/containers/header_container.jsx
 @ ./app/javascript/mastodon/features/account_timeline/index.jsx
 @ ./app/javascript/mastodon/features/ui/util/async-components.js
 @ ./app/javascript/mastodon/features/ui/index.jsx
 @ ./app/javascript/mastodon/containers/mastodon.jsx
 @ ./app/javascript/mastodon/main.jsx
 @ ./app/javascript/packs/application.js
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
