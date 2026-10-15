import readlineSync from 'readline-sync';
import { listaTareas } from '../servicios/serviciosTareas.js';
import { mostrarMenuDetalleTarea } from './menuDetalleTarea.js';

export function mostrarMenuVerTareas() {
  let volver = false;

  while (!volver) {
    console.log('\n¿Qué tareas deseas ver?\n');
    console.log('   [1] Todas');
    console.log('   [2] Pendientes');
    console.log('   [3] En curso');
    console.log('   [4] Terminadas');
    console.log('   [0] Volver\n');

    const opcion = readlineSync.question('Ingrese una opción: ');

    let tareasFiltradas;

    switch (opcion) {
      case '1':
        //Ahora se piden las tareas con el método del objeto listaTareas
        tareasFiltradas = listaTareas.obtenerTodas();
        break;
      case '2':
        tareasFiltradas = listaTareas.obtenerTodas().filter(t => t.estado === 'Pendiente');
        break;
      case '3':
        tareasFiltradas = listaTareas.obtenerTodas().filter(t => t.estado === 'En curso');
        break;
      case '4':
        tareasFiltradas = listaTareas.obtenerTodas().filter(t => t.estado === 'Terminada');
        break;
      case '0':
        volver = true;
        break;
      default:
        console.log('Opción inválida, intente de nuevo.');
    }

    //Si se eligió una opción válida de listado (no "volver" ni opción inválida)
    if (tareasFiltradas) {
      mostrarListado(tareasFiltradas);
    }
  }
}

//Se exporta porque también la usa el menú de búsqueda
export function mostrarListado(tareas) {
  //Ordena alfabéticamente por título, sin modificar el array original
  const ordenadas = [...tareas].sort((a, b) => a.titulo.localeCompare(b.titulo));

  console.log('\nEstas son tus tareas.\n');
  ordenadas.forEach((tarea, indice) => {
    console.log(`[${indice + 1}] ${tarea.titulo}`);
  });

  console.log('\n¿Deseas ver los detalles de alguna?');
  const seleccion = readlineSync.question('Introduce el número para verla o 0 para volver: ');

  const numero = Number(seleccion);

  if (numero === 0 || isNaN(numero) || numero > ordenadas.length) {
    return; //vuelve al submenú sin hacer nada
  }

  mostrarMenuDetalleTarea(ordenadas[numero - 1]);
}