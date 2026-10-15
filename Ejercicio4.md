# ALA 3 - Ejercicio 4: Características de la POO que se usaron

En este texto se explica qué características de la POO usamos en el Ejercicio 2
(la calculadora, con clases en TypeScript) y en el Ejercicio 3 (la ToDo List, con
prototipos en JavaScript), y cuáles no hizo falta usar.

## Características que se usaron

### 1. Objetos

Un objeto junta datos y comportamiento en una sola cosa. En los dos ejercicios
trabajamos creando objetos con `new`.

- Ejercicio 2: `const calculadora = new Calculadora(operador, operandos);`
- Ejercicio 3: `const tarea = new Tarea(titulo, descripcion, ...);`

Sirve para que cada objeto tenga sus propios datos. Cada tarea tiene su título y su
estado, sin mezclarse con las demás.

### 2. Moldes para crear objetos (clase y función constructora)

Hace falta algo que diga cómo se arma un objeto, y acá está la diferencia entre
los dos ejercicios.

- Ejercicio 2 (clases): usamos `class Calculadora` con su `constructor`.
- Ejercicio 3 (prototipos): usamos la función constructora `Tarea`, sin `class`.

Las dos cosas cumplen el mismo objetivo, que es no repetir código y crear muchos
objetos con la misma estructura.

### 3. Atributos y métodos

Los atributos son los datos del objeto y los métodos lo que sabe hacer.

- Ejercicio 2: atributos `operador` y `operandos`, y métodos como `calcular()`.
- Ejercicio 3: atributos como `titulo` y `estado`, y métodos como `editar()` y `agregar()`.

La diferencia es dónde se guardan los métodos. En el ejercicio 3 están en el
prototipo (`Tarea.prototype.editar`), así que todas las tareas comparten el mismo
método en vez de copiarlo en cada una.

### 4. Encapsulamiento

Es esconder lo de adentro del objeto y dejar visible solo lo necesario. Lo usamos
en el ejercicio 2:

```ts
private operador: string;
private sumar(): number { ... }
```

Desde afuera solo se puede usar `calcular()`. Los métodos `sumar`, `restar`, etc.
son privados porque solo los usa la propia clase.

En el ejercicio 3 casi no lo aplicamos: las propiedades de la tarea son públicas,
porque en JS con prototipos no existe `private` como en las clases de TS, y nos
quedamos con lo más simple.

### 5. Abstracción

Es poder usar un objeto sin saber cómo funciona por dentro.

- En `index.ts` del ejercicio 2 solo se llama a `calculadora.calcular()`, sin saber
  cómo se hace cada cuenta.
- En los menús del ejercicio 3 solo se llama a `tarea.editar(cambios)` o
  `listaTareas.agregar(...)`, sin saber cómo se guardan o modifican los datos.

Así los menús se ocupan de hablar con el usuario, y los objetos de manejar los datos.

## Características que no se usaron

### Herencia

Es cuando un objeto o clase toma lo de otro. No la usamos porque no teníamos tipos
parecidos entre sí. Todas las tareas tienen la misma forma, y la calculadora es una
sola cosa. Habría tenido sentido, por ejemplo, con tareas de distintos tipos (una
tarea de estudio y una de trabajo, cada una con datos extra).

### Polimorfismo

Es cuando varios objetos distintos responden al mismo método, cada uno a su manera.
Como no usamos herencia, no hubo objetos distintos con el mismo método. Se podría
haber hecho con una clase por operación (`Suma`, `Resta`, etc.), cada una con su
propio `calcular()`, pero para algo tan chico nos pareció que complicaba de más.

### Getters y setters

Sirven para leer y modificar atributos privados de forma controlada. No hicieron
falta porque ninguno de los atributos privados se tenía que leer o cambiar desde afuera.
La calculadora recibe sus datos en el constructor y solo devuelve un resultado.

## Conclusión

Usamos objetos, clases o prototipos, atributos, métodos, encapsulamiento (en el
ejercicio 2) y abstracción. No usamos herencia, polimorfismo ni getters y setters,
porque los problemas eran sencillos y no tenían objetos parecidos entre sí.