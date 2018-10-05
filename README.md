<p align="center">
  <a href="https://codea.com.mx">
    <img alt="Gatsby" src="src/static/img/favicon.png" width="80" />
  </a>
</p>
<h1 align="center">
  Codea v1
</h1>

<p align="center">
  <strong>This is the codea source code</strong><br>
  The idea behind this initiative is to expose a wide variety of articles mainly in the Javascript world.
</p>

<p align="center">
  <a href="https://gitlab.com/codea_/codea">
    <img src="https://img.shields.io/badge/codea-v1.0.0-blue.svg?longCache=true&style=flat-square" alt="Codea Version" />
  </a>
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-lightgrey.svg?longCache=true&style=flat-square" alt="Codea is released under the MIT license." />
  </a>
  <a href="https://gitlab.com/codea_/codea/-/jobs">
    <img src="https://gitlab.com/codea_/codea/badges/develop/build.svg" alt="Codea build" />
  </a>
  <a href="https://gitlab.com/codea_/codea/merge_requests">
    <img src="https://img.shields.io/badge/prs-welcome-blue.svg?longCache=true&style=flat-square" alt="PRs welcome!" />
  </a>
  <a href="(https://nodejs.org">
    <img src="https://img.shields.io/badge/node-%3E%3D9.x-brightgreen.svg?longCache=true&style=flat-square" alt="nodejs" />
  </a>
  <a href="https://yarnpkg.com/en/docs/install">
    <img src="https://img.shields.io/badge/yarn-%3E%3D%201.10.x-blue.svg?longCache=true&style=flat-square" alt="yarn install" />
  </a>
  <a href="https://docs.npmjs.com/getting-started/installing-node">
    <img src="https://img.shields.io/badge/npm-%3E%3D%206.x-red.svg?longCache=true&style=flat-square" alt="npm install" />
  </a>
</p>

Leélo también en [español](README.es.md)

## Getting started

Make sure you have a recent version of [nodejs](https://nodejs.org), and the
[yarn](https://yarnpkg.com) dependency management tool.

```sh
$ npm install --global yarn
```

Once these requirements are met, let's proceed and install the project dependencies.

```sh
$ cd codea-blog
$ yarn install
```

And finally, let's execute the development server:

```sh
$ ./node_modules/.bin/gatsby develop
```

or

```sh
$ yarn develop
```

You can now view blog in the browser http://localhost:8000

View GraphiQL, an in-browser IDE, to explore the blog's schema http://localhost:8000/___graphql

Feel free to leave any comment and/or suggestion.
