<p align="center">
  <a href="https://codea.com.mx">
    <img alt="Codea" src="src/images/svg/codea-preview.svg" width="150" />
  </a>
</p>

<p align="center">
  <strong>Este es el código fuente de codea</strong><br>
  La idea detrás de esta iniciativa es exponer una amplia variedad de artículos y conceptos, si te encanta compartir conocimiento a través de proyectos de código abierto, libros etc. Hemos decidido crear este proyecto para cualquier persona que quiera colaborar.
</p>

<p align="center">
  <a href="https://github.com/codea-team/codea" target="_blank">
    <img src="https://img.shields.io/badge/codea-v1.0.0-blue.svg?longCache=true" alt="Codea Version" />
  </a>

  <a href="LICENSE" target="_blank">
    <img src="https://img.shields.io/badge/license-MIT-lightgrey.svg?longCache=true" alt="Codea is released under the MIT license." />
  </a>

  <a href="https://github.com/codea-team/codea/pulls" target="_blank">
    <img src="https://img.shields.io/badge/prs-welcome-blue.svg?longCache=true" alt="PRs welcome!" />
  </a>

  <a href="https://github.com/codea-team/codea" target="_blank">
    <img src="https://circleci.com/gh/codea-team/codea/tree/master.svg?style=svg" alt="alt="Circle Build Status" />
  </a>

  <a href="https://lgtm.com/projects/g/codea-team/codea/alerts/" target="_blank">
    <img alt="Total alerts" src="https://img.shields.io/lgtm/alerts/g/codea-team/codea.svg?logo=lgtm&logoWidth=18"/>
  </a>

  <a href="https://lgtm.com/projects/g/codea-team/codea/context:javascript" target="_blank">
    <img alt="Language grade: JavaScript" src="https://img.shields.io/lgtm/grade/javascript/g/codea-team/codea.svg?logo=lgtm&logoWidth=18"/>
  </a>

  <a href="https://github.com/prettier/prettier" target="_blank">
    <img alt="Language grade: JavaScript" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg"/>
  </a>

  <a href="https://nodejs.org/es/" target="_blank">
    <img src="https://img.shields.io/badge/node-%3E%3D10.x-brightgreen.svg?longCache=true" alt="nodejs" />
  </a>

  <a href="https://yarnpkg.com/en/docs/install" target="_blank">
    <img src="https://img.shields.io/badge/yarn-%3E%3D%201.10.x-blue.svg?longCache=true" alt="yarn install" />
  </a>

  <a href="https://docs.npmjs.com/getting-started/installing-node" target="_blank">
    <img src="https://img.shields.io/badge/npm-%3E%3D%206.x-red.svg?longCache=true" alt="npm install" />
  </a>
</p>

Read this in [English](README.en.md)

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
