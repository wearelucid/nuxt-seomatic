# @wearelucid/nuxt-seomatic

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> Minimal SEOmatic plugin for Nuxt.js inspired by nuxt-seomatic-meta

[📖 **Release Notes**](./CHANGELOG.md)

## Setup

1. Add `@wearelucid/nuxt-seomatic` dependency to your project

```bash
yarn add @wearelucid/nuxt-seomatic # or npm install @wearelucid/nuxt-seomatic
```

2. Add `@wearelucid/nuxt-seomatic` to the `modules` section of `nuxt.config.js`

```js
{
  modules: [
    // Simple usage
    '@wearelucid/nuxt-seomatic',

    // With options
    ['@wearelucid/nuxt-seomatic', { /* module options */ }]
  ]
}
```

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Use [yarn link](https://yarnpkg.com/lang/en/docs/cli/link/) or [npm link](https://docs.npmjs.com/cli/link)
to link to your project.

## License

[MIT License](./LICENSE)

Copyright (c) Lucid <buero@wearelucid.ch>

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@wearelucid/nuxt-seomatic/latest.svg
[npm-version-href]: https://npmjs.com/package/@wearelucid/nuxt-seomatic

[npm-downloads-src]: https://img.shields.io/npm/dt/@wearelucid/nuxt-seomatic.svg
[npm-downloads-href]: https://npmjs.com/package/@wearelucid/nuxt-seomatic

[github-actions-ci-src]: https://github.com/https://github.com/wearelucid/nuxt-seomatic/workflows/ci/badge.svg
[github-actions-ci-href]: https://github.com/https://github.com/wearelucid/nuxt-seomatic/actions?query=workflow%3Aci

[codecov-src]: https://img.shields.io/codecov/c/github/https://github.com/wearelucid/nuxt-seomatic.svg
[codecov-href]: https://codecov.io/gh/https://github.com/wearelucid/nuxt-seomatic

[license-src]: https://img.shields.io/npm/l/@wearelucid/nuxt-seomatic.svg
[license-href]: https://npmjs.com/package/@wearelucid/nuxt-seomatic
