# ALA 3 - Ejercicio 3: ToDo List con POO basada en prototipos

## Qué es esto

Es la ToDo List de los ALA anteriores, pero reescrita con Programación Orientada
a Objetos basada en prototipos, en JavaScript. No se usa la palabra `class`:
los objetos se crean con funciones constructoras y los métodos se agregan al prototipo.

## Cómo correrlo

1. `npm install`
2. `node index.js`

Si en Windows ves los acentos mal en la consola, corré `chcp.com 65001` antes de ejecutar.

## Cómo está organizado

```
PdeP-ALA3-Ejercicio3/
├── index.js                     arranca el programa
├── modelos/
│   └── tarea.js                  función constructora Tarea y su método editar
├── servicios/
│   └── serviciosTareas.js        función constructora ListaTareas, con los métodos agregar y obtenerTodas
├── menus/                        un archivo por cada menú
└── utilidades/
    ├── validaciones.js           pide y convierte estado/dificultad
    └── formato.js                da formato a fechas y dificultad
```

## Qué se hizo con prototipos

- `Tarea` es una función constructora: se usa con `new Tarea(...)` y arma el objeto con
  título, descripción, estado, fechas y dificultad.
- El método `editar` está en `Tarea.prototype`, así que lo comparten todas las tareas
  y no se copia en cada una.
- `ListaTareas` es otra función constructora que guarda el array de tareas, con los
  métodos `agregar` y `obtenerTodas` en su prototipo.
- Se crea una sola lista (`listaTareas`) y se exporta, para que todos los menús usen la misma.

## Qué se puede hacer

Lo mismo que en los ALA anteriores: agregar tareas, verlas (todas o filtradas por estado),
ver el detalle de una, editarla y buscarla por título.