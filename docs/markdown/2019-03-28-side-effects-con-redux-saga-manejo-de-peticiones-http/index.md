---
date: '2019-03-28'
title: 'Side-Effects con Redux-Saga. Parte 1 - Manejo de peticiones http'
author: darcusfenix
tags: ['react js', 'redux-sagas', 'javascript', 'side-effects', 'reselect']
---

Este post es el primero de muchos más que pienso escribir sobre en el manejo de side-effects con la librería Redux-Saga. Este en específico está enfocado a peticiones http y cómo manejar los datos de una manera más efectiva reutilizando código entre sagas, acciones y reducer.

Antes de empezar debemos aclarar algunos puntos muy importantes.

**side effects**. No es un término de react o javascript. 
En pocas palabras se dice que es cualquier cosa que afecta fuera del scope de una función ejecutada.
Ejemplo: Realizar una petición http, acceder o modificar el local storage del browser, etc.

**redux-saga**. Proyecto basado en generators de es6. Es un middleware para redux, que además de acceder al storage y despachar acciones 
como los otros middlewares puedes iniciar, pausar o cancelar hilos independientes a la aplicación que únicamente están trabajando el _side-effect_ con simples acciones de redux.

Para entender mejor esta serie de publicaciones haré casos prácticos y reales. Con un poco de imaginacón haremos una versión mejorada del portal [imdb](https://imdb.com) con consumo de apis de clarovideo.

Casos de este post: 

1. Pintar una galería de películas en la página inicial.

2. Pintar los detalles de cada película sobre la imagen.

3. Pintar los detalles de la película en una nueva página.

En este punto ya debes tener configurado tu proyecto reactjs - redux - redux-saga. 
También podrás consultar el ejemplo finalizado en el repositorio git. Usaremos create-react-app para hacer más práctico el ejemplo. [Repositorio](https://github.com/codea-team/side-effects-redux-saga)

## Primer caso. Pintar una galería de películas en la página inicial.

![alt text](https://www.dropbox.com/s/2fw9fxkxai1jfw4/movies-list.png?raw=1 "")

Una vez montado el componente que responde a la petición _/movies_ ejecutamos nuestra propiedad _fetchMovies()_ que a su vez inicia una rutina de acciones más adecuada a una petición http.

```javascript{numberLines: true}
// app/containers/MoviesList/sagas.js

import { call, put, takeLatest, select } from 'redux-saga/effects'

import * as actions from './actions';
import { fetchMoviesRequest } from './requests';
import { selectRequestFilters } from "./selectors";

export function* fetchMovies() {
    try {
        const filters = yield select(selectRequestFilters);

        yield put(actions.fetchMovies.request());
        const data = yield call(fetchMoviesRequest, filters);
        yield put(actions.fetchMovies.success(data));
    } catch (err) {
        yield put(actions.fetchMovies.failure(err));
    } finally {
        yield put(actions.fetchMovies.fulfill());
    }
}

export default function* mainSaga() {
    yield takeLatest(actions.fetchMovies.TRIGGER, fetchMovies)
}
```

Este código previo es nuestra main saga que únicamente quedará en espera para cuando se lance la acción _fetchMovies()_ .
 
 _takeLatest_ toma la última acción ejecutada, si estaba una anteriormente en proceso se cancela e inicia esta nueva tarea.

Por consiguiente, la saga _fetchMovies()_ que responde al estado TRIGGER continua la rutina de acciones.

El effect _select_ retorna el objeto _filters_ de nuestro estado para este contenedor. Exactamente tal cual como el contenedor cuando se suscribe al storage y selecciona los datos.

A su vez el effect _call_ ejecuta una función cualquiera y quedará en espera hasta recibir un valor retornado por la función.

Y, por supuesto el effect _put_ es lo mismo que _dispatch_. Es decir, ejecuta una nueva acción para redux.

Después de esto y un poco de CSS queda lista la galería de películas en la página principal.

## Segundo caso. Pintar los detalles de cada película sobre la imagen.

![alt text](https://www.dropbox.com/s/8ywvjcgn3lqs2zj/movie-details.png?raw=1 "")

La funcionalidad para obtener los detalles de una película quedó al dar click en la imagen y se mostrará encima un recuadro azul-verde con la información.

Este caso de uso se hace más interesante. ¿Cómo realizar peticiones por cada una de las imágenes que se dé click?.

Bien, pues lo primero que se nos viene a la mente es algo exactamente parecido a lo que hicimos para obtener el listado de las películas.

Empecemos de esta manera. Sin problema podemos agregar una nueva acción que dispare la rutina de acciones para obtener los detalles de la película en el mismo contenedor del listado.
Pero, ¿por qué en el mismo contenedor? si bien podemos separar esta lógica en uno aparte _MovieDetails_


```javascript{numberLines: true}
// app/containers/MovieDetails/reducer.js
const initialState = {
  fetching: false,
  fetched: false,
  info: null,
  error: null,
};

...
        case getMovieDetails.TRIGGER:
            return {
              ...state,
              fetching: true,
            };

        case getMovieDetails.SUCCESS:
            return {
              ...state,
              fetched: true,
              info: action.payload,
            };

        case getMovieDetails.FAILURE:
            return {
              ...state,
              error: action.payload,
            };

        case getMovieDetails.FULFILL:
            return {
              ...state,
              fetching: false,
            };
...
```

Lo que tenemos en el archivo _reducer.js_ es el objeto/modelo de estado para los detalles de la película. Y en _sagas.js_ tal cual como en el listado de películas.

```javascript{numberLines: true}
// app/containers/MovieDetails/sagas.js

export function* getMovieDetails(action) {
    const movieId = action.payload;

    try {
        yield put(actions.getMovieDetails.request());
        const data = yield call(getMovieDetailsRequest, movieId);
        yield put(actions.getMovieDetails.success(data));
    } catch (err) {
        yield put(actions.getMovieDetails.failure(err));
    } finally {
        yield put(actions.getMovieDetails.fulfill());
    }
}

export default function* mainSaga() {
    yield takeLatest(actions.getMovieDetails.TRIGGER, getMovieDetails);
}
```

![alt text](https://www.dropbox.com/s/yocivmrlax4sane/same-data.png?raw=1 "")

Pero aquí está el detalle, en todos los recuadros sale la misma información. Se debe a que estamos renderizando el mismo contenedor por cada película y éste solo maneja información para una sola.

```javascript{numberLines: true}
// app/Components/MovieCard/index.js
import React, { useState }  from 'react';

import MovieDetails from '../../containers/MovieDetails'

import './styles.css';

function MovieCard({ movie }) {
    const [isOpen, setToggle] = useState(false);

    const toggle = () => setToggle(!isOpen);

    const { image_medium, title_episode, id } = movie;

    return (
        <div className="Card-Movie" >
            <img src={image_medium} alt={title_episode} onClick={toggle}/>

            {
                isOpen && (
                    <MovieDetails id={id} onClose={toggle} />
                )
            }

        </div>
    );
}

export default MovieCard;
```

¿Entonces? Una mejor idea es crear el estado del contenedor dinámico por película. ¿Cómo haremos esto?.
En nuestro reducer.js iniciamos el estado incial vacío. Y por cada acción / case nos aseguramos de tener un estado creado por película.


```javascript{numberLines: true}
// app/containers/MovieDetails/reducer.js
const initialState = {};

function reducer(state = initialState, action) {
    switch (action.type) {
        case getMovieDetails.TRIGGER:
            return getNewMovieState(action.payload, state, {
                fetching: true,
            });

        case getMovieDetails.SUCCESS:
            return getNewMovieState(action.payload.movieId, state, {
                fetched: true,
                info: action.payload.data,
            });

        case getMovieDetails.FAILURE:
            return getNewMovieState(action.payload.movieId, state, {
                error: action.payload.err,
            });

        case getMovieDetails.FULFILL:
            return getNewMovieState(action.payload, state, {
                fetching: false,
            });

        default:
            return state;
    }
}

function getNewMovieState(movieId, state, newState) {
    if (!state[movieId]) {
        return {
            ...state,
            [movieId]: {
                ...makeMovieState(),
                ...newState
            },
        };
    }

    return {
        ...state,
        [movieId]: {
            ...state[movieId],
            ...newState
        }
    }
}
```

Oviamente necesitamos pasar el idetificador de la película en cada acción ejecutada para lograr esto. 

![alt text](https://www.dropbox.com/s/vr5pgbv3kxvtz7p/diff-data.png?raw=1 "")

Observamos el árbol del estado global y notamos que se está generando un estado por cada película. Esto es justamente lo que queremos.

![alt text](https://www.dropbox.com/s/s6k3ck4hqb3e1jb/state-tree.png?raw=1 "")

Seguramente te estás preguntando. ¿Cómo seleccionar los datos para mi película en especifico?. Notarás que en el proyecto estamos usando _reselect_ y que gracias a que tenemos acceso a las propiedades del componente podemos seleccionar la película de esta manera.

```javascript{numberLines: true}
// app/containers/MovieDetails/reducer.js
const movieDetailsDomain = (state, { id }) => state.movieDetailsContainer[id] || makeMovieState();

export const selectMovieDetailsData = createSelector(
    movieDetailsDomain,
    (subState) => subState
);

export const selectMovie = createSelector(
    selectMovieDetailsData,
    (subState) => subState.info
);
```

Todo hasta aquí parece funcionar perfectamente. Pero, ¿qué pasa si damos click en varias imágenes lo más rápido posible?.
Si recuerdas el effect _takeLatest_ que está en la saga principal cancela la petición anterior e inicia la nueva petición con los detalles de la otra película. Entonces, ¿la película previa se quederá sin datos?. Me temo que sí.


Sólo necesitamos hacer un pequeño cambio en la _mainSaga()_ para manejar peticiones sin bloqueo por cada acción _getMovieDetails()_ lanzada.

```javascript{numberLines: true}
// app/containers/MovieDetails/sagas.js
export default function* mainSaga() {
    yield call(takeMovieTask)
}

function* takeMovieTask() {
    const tasks = {};

    while (true) {
        const action = yield take(actions.getMovieDetails.TRIGGER);

        if (tasks[action.payload]) {
            yield cancel(tasks[action.payload]);
        }

        tasks[action.payload] = yield fork(getMovieDetails, action);
    }
}
```

Gracias al effect _fork()_ podemos lanzar tareas sin bloquear el flujo y asi lanzar tantas peticiones sean posibles. O bien, de lo contrario se cancela siempre y cuando esté una en proceso.

## Tercer caso. Pintar los detalles de la película en una nueva página.

![alt text](https://www.dropbox.com/s/xltc4fve11pwohf/movie-details-page.png?raw=1 "")

¿Vas a crear un nuevo contenedor que tendrá su propia acción _getMovieDetails()_? ¿Duplicarás el código?. je je Yo sé que no lo harás.

El punto está en reutilizar la lógica actual de obtener los detalles de la película para los recuadros verdes y la nueva página. 

Por supuesto, haremos un _Higher-Order Component_, es decir, un HOC que nos injecte las propiedades (datos de la película y acciones). 
Solo por si las moscas te confirmo que un HOC es una simple función que recibe un componente y retorna un nuevo componente. 

Aprovechando esta definición este HOC manejará las acciones de redux, reducer y sagas correspondientes a los detalles de una sola película y unicamente pasará los datos como propiedades al nuevo componente para que los utilice como quiera.

Para ello, tanto _MovieDetailsPage_ y  _MovieDetailsWidget_ utilizarán el HOC _withMovieDetails_
```
 ./MovieDetailsProvider
    ./MovieDetailsWidget
    ./MovieDetailsPage
```

```javascript{numberLines: true}
// src/containers/MovieDetailsWidget/index.js
import withMovieDetails  from "../MovieDetailsProvider";

...

export default compose(
    withMovieDetails,
)(MovieDetailsWidget);
```

El código siguiente es el HOC que una vez montado dispara la acción _getMovieDetails_. 

```javascript{numberLines: true}
// src/containers/MovieDetailsProvider/index.js
export function withMovieDetailsHOC(WrappedComponent) {
    class WithMovieDetails extends React.Component {
        static displayName = 'WithMovieDetails';

        componentDidMount() {
            if (!this.props.movieDetailsData.fetched) {
                this.props.getMovieDetails(this.props.id);
            }
        }

        render() {
            return <WrappedComponent {...this.props} />;
        }
    }

    return WithMovieDetails;
}


export function mapDispatchToProps(dispatch) {
    return {
        getMovieDetails: (movieId) => dispatch(getMovieDetails(movieId)),
    }
}

export function mapStateToProps() {
    return createStructuredSelector({
        movieDetailsData: selectMovieDetailsData,
        movie: selectMovie,
        genres: selectGenres,
    });
}

const withMovieDetailsState = connect(mapStateToProps, mapDispatchToProps);

export default compose(
    withMovieDetailsState,
    withMovieDetailsHOC,
);
```

Con esto damos por cerrado el tema de peticiones HTTP con Redux-Saga. Espero te sea de buena utilidad estos buenos ejemplos prácticos y reales. 
Si tienes dudas sobre el tema al respecto puedes preguntar o bien consultar el proyecto finalizado en el enlace puesto aquí. Y para dudas de librerías no hay mejor lugar que su propia documentación de cada una de ellas

Gracias.
