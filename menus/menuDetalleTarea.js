import readlineSync from 'readline-sync';
import { formatearDificultad, formatearFecha } from '../utilidades/formato.js';
import { mostrarMenuEdicionTarea } from './menuEdicionTarea.js';

export function mostrarMenuDetalleTarea(tarea) {
  console.log('\nEsta es la tarea que elegiste.\n');
  console.log(`     ${tarea.titulo}\n`);
  //Si la descripción está vacía, se muestra el aviso en vez de nada
  console.log(`     ${tarea.descripcion || 'Sin Datos'}\n`);
  console.log(`     Estado:       ${tarea.estado}`);
  console.log(`     Dificultad:   ${formatearDificultad(tarea.dificultad)}`);
  console.log(`     Vencimiento:  ${formatearFecha(tarea.vencimiento)}`);
  console.log(`     Creación:     ${formatearFecha(tarea.creacion)}\n`);

  const opcion = readlineSync.question('Presiona [E] para editar o [0] para volver: ').toUpperCase();

  if (opcion === 'E') {
    mostrarMenuEdicionTarea(tarea);
  }
}