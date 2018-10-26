<p align="center">
  <a href="https://codea.com.mx">
    <img alt="Gatsby" src="src/static/images/favicon.png" width="80" />
  </a>
</p>
<h1 align="center">
  Codea v1
</h1>

<p align="center">
  <strong>Este es el código fuente de codea</strong><br>
  La idea detrás de esta iniciativa es exponer una amplia variedad de artículos y conceptos, si te encanta compartir conocimiento a través de proyectos de código abierto, libros etc. Hemos decidido crear este proyecto para cualquier persona que quiera colaborar.
</p>

<p align="center">
  <a href="https://gitlab.com/codea_/codea">
    <img src="https://img.shields.io/badge/codea-v1.0.0-blue.svg?longCache=true&style=flat-square" alt="Codea Version" />
  </a>

  <a href="LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-lightgrey.svg?longCache=true&style=flat-square" alt="Codea is released under the MIT license." />
  </a>

  <a href="https://github.com/codea-team/codea/pulls">
    <img src="https://img.shields.io/badge/prs-welcome-blue.svg?longCache=true&style=flat-square" alt="PRs welcome!" />
  </a>

  <a href="https://github.com/codea-team/codea">
    <img src="https://circleci.com/gh/codea-team/codea/tree/master.svg?style=svg" alt="alt="Circle Build Status" />
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

Read this in [English](README.md)

## Manos a la obra

Asegúrese de tener una versión reciente de [nodejs](https://nodejs.org) y la
herramienta de administración de dependencias [yarn](https://yarnpkg.com).

```sh
$ npm install --global yarn
```

Enseguida procedemos a instalar las dependencias del proyecto.

```sh
$ cd blog-codea/
$ yarn install
```

Y finalmente, ejecutemos el servidor en modo desarrollo:

```sh
$ ./node_modules/.bin/gatsby develop
```

o

```sh
$ yarn develop
```

Ahora puede ver el blog en el navegador http://localhost:8000

Vea GraphiQL, un IDE en el navegador, para explorar los datos y el esquema del
blog http://localhost:8000/___graphql

Siéntase libre de dejar cualquier comentario y/o sugerencia.
