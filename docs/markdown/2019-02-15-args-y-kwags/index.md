---
date: '2019-02-15'
title: 'Uso de args y kwargs en python'
author: slackmart
tags: ['python', 'kwargs', 'args']
---

En esta ocasión les presento un ejemplo práctico donde exploraremos el uso de
los argumentos llamados args, y kwargs (cabe mencionar que no son palabras
reservadas del lenguaje, pero **se considera buena práctica nombrarlos como tal**).


Empecemos con una función básica cuya tarea es hacer una petición al servicio
REST de stackoverflow.

## Extraer las URLs de las últimas 5 preguntas

```python{7}{numberLines: true}
import requests


def get_latest_questions():
    """Fetch and return latest stackoverflow questions links."""
    response = requests.get(
        'https://api.stackexchange.com/2.2/questions?pagesize=5&page=1&site=stackoverflow')
    if response.ok:
        return [q['link'] for q in response.json().get('items')]
    print(response.text)
```

Como pueden observar la lógica es bastante sencilla, ya que el paquete `requests`
nos permite conectar a stackoverflow y extraer la la información que necesitamos.

A destacar que para este requerimento en específico necesitamos tres _query strings_
además de la URL (línea 7).

## Cambiar los parámetros dinamicamente

Imaginemos que el requerimento ha cambiado y ahora queremos que el número de URLs
y la comunidad de stackexchange sea dinámico.

Aquí es donde los parámetros posicionales se vuelven útiles, e inmediatamente nos
damos cuenta que ocupamos pasar el `pagesize` y el `site` cuando la función es
ejecutada (e.j. `get_lastest_questions(10, 'serverfault')`).

```python{4}{numberLines: true}
def get_latest_questions_only_args(pagesize, site):
    """Fetch and return latest stackoverflow questions links."""
    response = requests.get(
        f'https://api.stackexchange.com/2.2/questions?pagesize={pagesize}&page=1&site={site}')
    if response.ok:
        return [q['link'] for q in response.json().get('items')]

```

Los parámetros se usan como se muestra en la línea número 4.

## ¿Qué hacemos si queremos seguir agregando más _query strings_ a la petición web?

R: Yep, más parámetros. Eso está bien... a no ser que el número de parámetros sea
mayor que cinco (¡qué es otra convención para mantener el código lo más limpio posible!).
Y si... además de eso nos preocupa mantener la compatibilidad de nuestro código: ¡kwargs al rescate!


```python{16-19,21-24,31}{numberLines: true}
from datetime import datetime, timezone, timedelta


def get_latest_questions_with_kwargs_1(pagesize, site, **kwargs):
    """
    Fetch and return latest stackoverflow questions links.

    kwargs expected:
        fromdate, todate, site, pagesize and page
    """
    today = datetime.now()
    yesterday = today - timedelta(days=1)
    default_from_date = int(yesterday.replace(tzinfo=timezone.utc).timestamp())
    default_todate = int(today.replace(tzinfo=timezone.utc).timestamp())

    from_date = kwargs.get('fromdate', default_from_date)
    todate = kwargs.get('todate', default_todate)
    page_number = kwargs.get('page', 1)
    sort, order = kwargs.get('sort', 'activity'), kwargs.get('order', 'desc')

    url = 'https://api.stackexchange.com/2.2/questions'
    response = requests.get(f'{url}?pagesize={pagesize}&page={page_number}'
                            f'&order={order}&sort={sort}'
                            f'&site={site}&fromdate={from_date}&todate={todate}')
    if response.ok:
        return [q['link'] for q in response.json().get('items')]
    print(response.text)


if __name__ == '__main__':
    print(get_latest_questions_with_kwargs_1(1, 'serverfault', page=3))
```

¡Qué no les asusten los `**` que preceden a la variable kwargs! No son punteros
(como en lenguage c :P). Básicamente es la sintaxis que python utiliza para saber
que lo que viene dentro de los kwargs es un diccionario y por tanto, puede ser
tratado como tal, y además no importa en órden en que se pasen los argumentos al
momento de ejecutar la función.

La línea 31 muestra un ejemplo en el cuál se específica que deseamos obtener la
información de la página 3 (notar que el API trae paginación).

---

¡Espera un momento!

¿Cuáles parámetros se pasan como posicionales y cuáles cómo kwargs?

R: Cualquiera que tenga la sintaxis: `var_name='value'` va a poder ser empleado
dentro de la función usando `kwargs.get('var_name')`.


... y ¿qué hay de los `*args` que se mencionan en el título del artículo?

R: Eso ya está cubierto, ¡pero veamos cómo podríamos reescribir la función!

```python{1,8}{numberLines: true}
def get_latest_questions_with_kwargs_2(*args, **kwargs):
    """
    Fetch and return latest stackoverflow questions links.

    kwargs expected:
        fromdate, todate, site, pagesize and page
    """
    pagesize, site = args  # Here is were the magic occurs (tuple expansion)
    today = datetime.now()
    yesterday = today - timedelta(days=1)
    default_from_date = int(yesterday.replace(tzinfo=timezone.utc).timestamp())
    default_todate = int(today.replace(tzinfo=timezone.utc).timestamp())

    from_date = kwargs.get('fromdate', default_from_date)
    todate = kwargs.get('todate', default_todate)
    page_number = kwargs.get('page', 1)
    sort, order = kwargs.get('sort', 'activity'), kwargs.get('order', 'desc')

    url = 'https://api.stackexchange.com/2.2/questions'
    response = requests.get(f'{url}?pagesize={pagesize}&page={page_number}'
                            f'&order={order}&sort={sort}'
                            f'&site={site}&fromdate={from_date}&todate={todate}')
    if response.ok:
        return [q['link'] for q in response.json().get('items')]
    print(response.text)
```

Al final del día, los parámetros que no sean `key=value`, se envían en `args`,
y el tipo de dato de `args` es una tupla (de manera que podemos expandir el
contenido usando la sintaxis `eyes, hands = args`).

---

Nota: el número de argumentos en args debe corresponder al número de variables.

Ejemplo:

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
    print(get_latest_questions())  # No arguments at all.
    print(get_latest_questions_only_args(1, 'serverfault'))  # Only positional arguments (aka. args)
    print(get_latest_questions_with_kwargs_1(1, 'english', page=1, order='asc'))  # With both: args & kwargs
    print(get_latest_questions_with_kwargs_1(1, 'ux', page=1, order='asc'))
    print(get_latest_questions_with_kwargs_2(1, 'serverfault', fromdate=1549497600, sort='votes'))
```

Como última nota:

> Los parámetros posicionales deben enviarse antes de los kwargs.

```python{2}{numberLines: true}
    print(get_latest_questions_only_args(1, 'serverfault', site="es.stackoverflow"))  # Good
    print(get_latest_questions_only_args(1, pagesize=1, 'es.stackoverflow'))  # Bad
```

## Conoce más sobre el API de stackexchange

* https://stackexchange.com/sites
* https://api.stackexchange.com/docs/questions


¡Gracias por leerme :P!
