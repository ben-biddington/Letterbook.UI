# 2. Start with current UI

Date: 2023-08-12

## Status

Accepted

## Context

There is already a lot of UI that comes with [the existing Mastodon server](https://github.com/mastodon/mastodon), could we start by extracting that here?

## Decision

The change that we're proposing or have agreed to implement.

### Clone source and check for js files

```
find . -name "*.js" -o -name "*.ts" -not -path "./directory/*" | wc -l
29372
```

Yikes.

After deleting `node_modules` (couldn't make `find` ignore it):

```
find . -name "_.js" -o -name "_.ts" | wc -l
232
```

### Copy them over with their tree

```
~/sauce/mastodon$ find -name "*.ts" -exec cp --parents \{\} -dt ~/sauce/LetterBox.UI/ \;
~/sauce/mastodon$ find -name "*.js" -exec cp --parents \{\} -dt ~/sauce/LetterBox.UI/ \;
```

```
~/sauce/LetterBox.UI$ find . -name \*.ts -o -name "\*.js" | wc -l
232
```

### cp: cannot stat './public/sw.js': No such file or directory

That file is a symlink. Use `-d`.

### Attribution

[TBD] Bring over author attribution with the files.

## Consequences

This allows starting with all (we hope) of the current frontend source.
