//Función constructora: por convención lleva mayúscula inicial.
//"this" se refiere al objeto nuevo que se está creando con "new"
export function Tarea(titulo, descripcion, vencimiento, dificultad, estado) {
  const ahora = new Date();

  this.titulo = titulo;
  this.descripcion = descripcion;
  //Si no se pasa estado, arranca en 'Pendiente'
  this.estado = estado || 'Pendiente';
  this.creacion = ahora;
  this.ultimaEdicion = ahora;
  this.vencimiento = vencimiento;
  //Si no se pasa dificultad, arranca en 'Fácil'
  this.dificultad = dificultad || 'Fácil';
}

//Método en el prototipo: lo comparten todas las tareas.
//Usa "function" y no una flecha, para que "this" sea la tarea que lo llama
Tarea.prototype.editar = function (cambios) {
  //Copia sobre esta tarea solo los campos que vienen en "cambios"
  Object.assign(this, cambios);
  //Actualiza la fecha de última edición
  this.ultimaEdicion = new Date();
};