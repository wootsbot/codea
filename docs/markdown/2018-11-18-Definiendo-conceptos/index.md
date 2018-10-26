---
path: '/articles/Definiendo-conceptos-Closure-y-Scope-en-JavaScript'
date: '2018-07-07'
title: 'Definiendo conceptos: Closure y Scope en JavaScript'
tags: ['ReactJS', 'Web', 'Codea', 'UI', 'js', 'Lodash']
author: slackmart
---

#Qué es el Scope

El scope es el alcance de una variable, puede ser de dos tipos, global y local. Una variable cuyo scope es global se puede acceder desde cualquier parte del código, una local solo desde la función que la contiene. Ejemplo:

```js
var a = 1
function global() {
  console.log(a)
}
global()
console.log(a)
```

En ese caso a es una variable global ya que podemos acceder tanto fuera como dentro de una función debido a haberla definido fuera de cualquier función.

```js
function local() {
  var a = 2
  console.log(a)
}
local()
console.log(a)
```
