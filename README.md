<h1 align="center">Luke's Design System CSS</h1>

<p align="center">The CSS implementation of Luke's Design System</p>


## Install
This repository is distributed with [npm]. After [installing npm][install-npm], you can install `@lukes-design-system/css` with this command:

```sh
$ npm install --save @lukes-design-system/css
```

## Usage
The included source files are written in [Sass] using SCSS syntax. After [installing](#install) with npm, you can add your project's `node_modules` directory to your Sass [include paths](https://github.com/sass/node-sass#includepaths) (AKA [load paths](http://technology.customink.com/blog/2014/10/09/understanding-and-using-sass-load-paths/) in Ruby), then import it like this:

```scss
@import "@lukes-design-system/css/index.scss";
```

You can import individual Primer modules directly from the `@primer/css` package:

```scss
@import "@lukes-design-system/css/core/index.scss";
```

## Development
See [DEVELOP.md](./DEVELOP.md) for development docs.

## Releasing (for GitHub staff)
You can find docs about our release process in [RELEASING.md](./RELEASING.md).

<!-- ## Documentation
The [Primer CSS docs site](https://primer.style/css) is deployed from this repo with [primer/deploy](https://github.com/primer/deploy). See [the development docs](DEVELOP.md#docs-site) for more info. -->


[install-npm]: https://docs.npmjs.com/getting-started/installing-node
[npm]: https://www.npmjs.com/
<!-- [primer]: https://primer.style -->
[sass]: http://sass-lang.com/
