//Convierte la dificultad a su representación con estrellas
export function formatearDificultad(dificultad) {
  switch (dificultad) {
    case 'Fácil':
      return '★☆☆';
    case 'Medio':
      return '★★☆';
    case 'Difícil':
      return '★★★';
    default:
      return 'Sin datos';
  }
}

//Convierte un Date a texto DD/MM/AAAA. Si no hay fecha, avisa con "Sin Datos"
export function formatearFecha(fecha) {
  if (!fecha) {
    return 'Sin Datos';
  }

  const dia = fecha.getDate();
  const mes = fecha.getMonth() + 1; // +1 porque getMonth() cuenta desde 0
  const anio = fecha.getFullYear();

  //padStart(2, '0') asegura 2 dígitos (05 en vez de 5)
  return `${String(dia).padStart(2, '0')}/${String(mes).padStart(2, '0')}/${anio}`;
}

//Convierte un texto "DD/MM/AAAA" a un objeto Date válido
export function parsearFecha(texto) {
  if (!texto || texto.trim() === '') {
    return undefined;
  }

  const partes = texto.split('/');
  const dia = Number(partes[0]);
  const mes = Number(partes[1]) - 1;
  const anio = Number(partes[2]);

  return new Date(anio, mes, dia);
}