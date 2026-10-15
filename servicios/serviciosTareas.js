import { Tarea } from '../modelos/tarea.js';

//Función constructora de la lista. Cada lista tiene su propio array de tareas
export function ListaTareas() {
  this.tareas = [];
}

//Agrega una tarea nueva a la lista.
//"new Tarea(...)" crea un objeto usando la función constructora del modelo
ListaTareas.prototype.agregar = function (titulo, descripcion, vencimiento, dificultad, estado) {
  const nuevaTarea = new Tarea(titulo, descripcion, vencimiento, dificultad, estado);
  this.tareas.push(nuevaTarea);
};

//Devuelve todas las tareas guardadas
ListaTareas.prototype.obtenerTodas = function () {
  return this.tareas;
};

//Creamos una sola lista y la exportamos, así todos los menús usan la misma.
//Si cada menú hiciera su propio "new ListaTareas()", cada uno tendría una lista distinta y vacía
export const listaTareas = new ListaTareas();