import readlineSync from 'readline-sync';
//Ahora importamos la lista ya creada, no una función suelta
import { listaTareas } from '../servicios/serviciosTareas.js';
import { pedirEstado, pedirDificultad } from '../utilidades/validaciones.js';
import { parsearFecha } from '../utilidades/formato.js';

export function mostrarMenuAgregarTarea() {
  console.log('\nEstás creando una nueva tarea.\n');

  const titulo = readlineSync.question('1. Ingresa el Título: ');
  const descripcion = readlineSync.question('2. Ingresa la descripción: ');
  const estado = pedirEstado();
  const dificultad = pedirDificultad();
  const vencimientoTexto = readlineSync.question('5. Vencimiento: ');

  //Si el usuario dejó vacío el vencimiento, queda como "undefined"
  const vencimiento = parsearFecha(vencimientoTexto);

  //Llamamos al método "agregar" del objeto listaTareas (el que está en el prototipo)
  listaTareas.agregar(titulo, descripcion, vencimiento, dificultad, estado);

  console.log('\n¡Datos guardados!\n');
  readlineSync.keyInPause('Presiona cualquier tecla para continuar ...', { guide: false });
}