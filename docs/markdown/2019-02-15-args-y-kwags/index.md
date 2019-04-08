---
date: '2019-02-15'
latestUpdateDate: '2019-02-15'
title: 'Uso de args y kwargs en python'
author: slackmart
tags: ['python', 'kwargs', 'args']
---

Al inicio del desarrollo de un proyecto, es difícil saber con exactitud todos los
posibles casos de uso de nuestro código, es aquí donde uno como programador debe
aprovechar las facilidades que el lenguaje de programación nos ofrece y hacer código
fácil de extender.

> **El código se escribe una vez, pero se lee muchísimas más veces y... por diferentes personas.**

En esta ocasión les presento un ejemplo práctico donde exploraremos el uso de
los argumentos llamados args, y kwargs (cabe mencionar que no son palabras
reservadas del lenguaje, pero **se considera buena práctica nombrarlos como tal**).

Empecemos con una función básica cuya tarea es hacer una petición al servicio
REST de stackoverflow.

## Extraer las URLs de las últimas 5 preguntas

```python{6-10}{numberLines: true}
import requests


def get_latest_questions():
    """Fetch and return latest questions' links from stackoverflow site."""
    query_str = {
        'pagesize': 5,
        'page': 1,
        'site': 'stackoverflow',
    }
    response = requests.get(
        'https://api.stackexchange.com/2.2/questions', params=query_str)
    if response.ok:
        return [q['link'] for q in response.json().get('items')]
    print(response.text)
```

Como pueden observar la lógica es bastante sencilla, ya que el paquete `requests`
nos permite conectar a stackoverflow y extraer la información que necesitamos.

A destacar que para este requerimento en específico necesitamos tres _términos de búsqueda_,
además de la URL (líneas 6-10).

## Cambiar los parámetros dinámicamente

Imaginemos que el requerimento ha cambiado y ahora el número de enlaces web y la
comunidad de stackexchange debe ser dinámico.

Aquí es donde los parámetros posicionales se vuelven útiles, e inmediatamente nos
damos cuenta que ocupamos pasar el `pagesize` y el `site` cuando la función es
ejecutada (e.j. `get_latest_questions_only_args(10, 'serverfault')`).

```python{6,8}{numberLines: true}
def get_latest_questions_only_args(pagesize, site):
    """
    Fetch and return latest questions' links from stackexchange specified site.
    """
    query_str = {
        'pagesize': pagesize,
        'page': 1,
        'site': site,
    }
    response = requests.get(
        'https://api.stackexchange.com/2.2/questions', params=query_str)
    if response.ok:
        return [q['link'] for q in response.json().get('items')]
```

Los parámetros se usan como se muestra en las líneas 6 y 8.

## ¿Qué hacemos si queremos seguir agregando más _términos de búsqueda_ a la petición web?

R: ¡Sí!, más parámetros. Eso está bien... a no ser que el número de parámetros sea
mayor que cinco (¡qué es otra convención para mantener el código lo más limpio posible!).
Y si... además de eso nos preocupa mantener la compatibilidad de nuestro código: **¡kwargs al rescate!**

```python{19-23,35-39}{numberLines: true}
from datetime import datetime, timezone, timedelta


def get_latest_questions_with_kwargs_1(pagesize, site, **kwargs):
    """
    Fetch and return latest questions' links from stackexchange specified site.

    expected kwargs:
        fromdate, todate, site, pagesize and page
    """
    if 'fromdate' not in kwargs or 'todate' not in kwargs:
        print('ERR: Both fromdate and todate are required')
        return []

    query_str = {
        'pagesize': pagesize,
        'site': site,

        'fromdate': kwargs.get('fromdate'),
        'todate': kwargs.get('todate'),
        'page': kwargs.get('page', 1),
        'sort': kwargs.get('sort', 'activity'),
        'order': kwargs.get('order', 'desc'),
    }
    response = requests.get(
        'https://api.stackexchange.com/2.2/questions', params=query_str)
    if response.ok:
        return [q['link'] for q in response.json().get('items')]
    print(response.text)


if __name__ == '__main__':
    today = datetime.now()
    yesterday = today - timedelta(days=1)
    query = {
        'fromdate': int(yesterday.replace(tzinfo=timezone.utc).timestamp()),
        'todate': int(today.replace(tzinfo=timezone.utc).timestamp()),
        'page': 3
    }
    links = get_latest_questions_with_kwargs_1(1, 'serverfault', **query)
```

Los `**` que preceden a la variable `kwargs` son la sintaxis que python utiliza para
saber que lo que viene dentro es un diccionario y por tanto, puede ser tratado como
tal, y además no importa en órden en que se pasen los argumentos al momento de
ejecutar la función.

Las líneas 35-39 muestran un ejemplo en el cuál se específica que deseamos obtener
la información de la página 3 de un día antes (al momento de ejetutar el programa).

---

¡Espera un momento!

¿Cuáles parámetros se pasan como `args` y cuáles cómo `kwargs`?

R: Cualquiera que tenga la sintaxis: `var_name='value'` va a poder ser empleado
dentro de la función usando `kwargs.get('var_name')`.

... y ¿qué hay de los `*args` que se mencionan en el título del artículo?

R: Eso ya está cubierto, ¡pero veamos cómo podríamos reescribir la función!

```python{1,10}{numberLines: true}
def get_latest_questions_with_kwargs_2(*args, **kwargs):
    """
    Fetch and return latest questions' links from stackexchange specified site.

    expected args:
        pagesize and site
    expected kwargs:
        fromdate, todate, site, pagesize and page
    """
    pagesize, site = args  # expanding args content

    if 'fromdate' not in kwargs or 'todate' not in kwargs:
        print('ERR: Both fromdate and todate are required')
        return []

    query_str = {
        'pagesize': pagesize,
        'site': site,

        'fromdate': kwargs.get('fromdate'),
        'todate': kwargs.get('todate'),
        'page': kwargs.get('page', 1),
        'sort': kwargs.get('sort', 'activity'),
        'order': kwargs.get('order', 'desc'),
    }

    response = requests.get(
        'https://api.stackexchange.com/2.2/questions', params=query_str)
    if response.ok:
        return [q['link'] for q in response.json().get('items')]
    print(response.text)
```

Al final del día, los parámetros que no sean `clave=valor`, se envían en `args`,
y el tipo de dato de `args` es una tupla (de manera que podemos expandir el
contenido usando la sintaxis `eyes, hands = args`).

---

Nota: el número de argumentos en args debe corresponder al número de variables.

Ejemplo de uso incorrecto:

```python
>>> numbers = (1, 4, 5, 3)
>>> a, b = numbers
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ValueError: too many values to unpack (expected 2)
```

## Ejecutando cada una de las funciones con sus respectivos parámetros

```python{numberLines: true}

if __name__ == '__main__':
    today = datetime.now()
    yesterday = today - timedelta(days=1)
    query = {
        'fromdate': int(yesterday.replace(tzinfo=timezone.utc).timestamp()),
        'todate': int(today.replace(tzinfo=timezone.utc).timestamp()),
        'page': 3
    }

    # No arguments at all.
    print(get_latest_questions())

    # Only positional arguments (aka. args)
    print(get_latest_questions_only_args(1, 'serverfault'))

    # With both: args & kwargs
    print(get_latest_questions_with_kwargs_1(1, 'english', order='asc', **query))
    print(get_latest_questions_with_kwargs_1(1, 'ux', **query))
    print(get_latest_questions_with_kwargs_2(1, 'serverfault', sort='votes', **query))
```

Nota:

> **Los parámetros posicionales deben enviarse antes de los kwargs.**

```python{3-8}{numberLines: true}
>>> # Good
>>> print(get_latest_questions_only_args(1, 'serverfault', site="es.stackoverflow"))  # Good
>>> # Bad
>>> print(get_latest_questions_only_args(1, pagesize=1, 'es.stackoverflow'))
>>>   File "a.py", line 71
>>>     print(get_latest_questions_with_kwargs_2(1, page=2, 'ux'))
>>>                                                        ^
>>> SyntaxError: positional argument follows keyword argument
```

## Conoce más sobre el API de stackexchange

- https://stackexchange.com/sites
- https://api.stackexchange.com/docs/questions

### ¡Hasta la próxima!
