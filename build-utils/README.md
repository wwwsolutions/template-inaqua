# build-utils

This is a place from where a build process is controlled.

Build different Webpack configurations in highly flexible way by composing modularized parts.

***Note***

> Beware of a fat lady with the evil eye and expensive taste, and the fact that all parts of this configuration are indeed a ***functions*** which return smaller parts of configuration.

## Configurations

***inital/base***

```bash
    webpack.config.js
```

***developer mode***

```bash
    webpack.development.js
```

***production mode***

```bash
    webpack.production.js
```

## Subconfigurations

```bash
    base/base.development.js
    base/base.production.js
```

## Loaders

```bash
    loaders/babel.loader.js
    loaders/fonts.loader.js
    loaders/images.loader.js
    loaders/postcss.loader.development.js
    loaders/postcss.loader.production.js
    loaders/video.loader.js
```

## Server

```bash
    server/dev.server.js
```

***Note***

> You only need to include server into developer configuration.
