# Codea

Este es el código fuente de codea blog. La idea detrás de esta iniciativa es
exponer una amplia variedad de artículos principalmente en el mundo de Javascript.

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
