import readlineSync from 'readline-sync';
import { mostrarMenuVerTareas } from './menuVerTareas.js';
import { mostrarMenuBuscarTarea } from './menuBuscarTarea.js';
import { mostrarMenuAgregarTarea } from './menuAgregarTarea.js';

export function mostrarMenuPrincipal() {
  let salir = false;

  //El bucle se repite hasta que el usuario elija la opción 0
  while (!salir) {
    console.log('\n¡Hola Olivia!\n');
    console.log('¿Qué deseas hacer?\n');
    console.log('   [1] Ver Mis Tareas.');
    console.log('   [2] Buscar una Tarea.');
    console.log('   [3] Agregar una Tarea.');
    console.log('   [0] Salir.\n');

    const opcion = readlineSync.question('Ingrese una opción: ');

    switch (opcion) {
      case '1':
        mostrarMenuVerTareas();
        break;
      case '2':
        mostrarMenuBuscarTarea();
        break;
      case '3':
        mostrarMenuAgregarTarea();
        break;
      case '0':
        salir = true;
        console.log('¡Hasta luego!');
        break;
      //Si ingresa algo fuera del menú, se avisa y se repite el bucle
      default:
        console.log('Opción inválida, intente de nuevo.');
    }
  }
}