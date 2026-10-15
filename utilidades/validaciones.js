import readlineSync from 'readline-sync';

//Pide el estado y repite hasta que el usuario ingrese una letra válida
export function pedirEstado() {
  const opciones = { P: 'Pendiente', E: 'En curso', T: 'Terminada', C: 'Cancelada' };
  let entrada;

  do {
    entrada = readlineSync.question('3. Estado ([P]endiente / [E]n curso / [T]erminada / [C]ancelada): ').toUpperCase();
  } while (!opciones[entrada]);

  return opciones[entrada];
}

//Pide la dificultad y repite hasta que el usuario ingrese un número válido
export function pedirDificultad() {
  const opciones = { '1': 'Fácil', '2': 'Medio', '3': 'Difícil' };
  let entrada;

  do {
    entrada = readlineSync.question('4. Dificultad: ([1] / [2] / [3]): ');
  } while (!opciones[entrada]);

  return opciones[entrada];
}

//Convierte la letra ingresada al estado completo. No valida: asume que el dato es correcto
export function convertirEstado(letra) {
  const opciones = { P: 'Pendiente', E: 'En curso', T: 'Terminada', C: 'Cancelada' };
  return opciones[letra.toUpperCase()];
}

//Convierte el número ingresado a la dificultad completa. No valida: asume que el dato es correcto
export function convertirDificultad(numero) {
  const opciones = { '1': 'Fácil', '2': 'Medio', '3': 'Difícil' };
  return opciones[numero];
}