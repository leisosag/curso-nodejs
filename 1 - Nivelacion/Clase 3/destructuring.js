const personaje = {
  nombre: 'Harry',
  apellido: 'Potter',
  casa: 'Gryffindor',
  getDescripcion() {
    return `${nombre} ${apellido} es de ${casa}`;
  },
};

const nombre = personaje.nombre;
const { apellido, casa, getDescripcion, edad = 11 } = personaje;
console.log(nombre);
console.log(edad);
console.log(getDescripcion());

const imprimirPersonaje = ({ apellido, casa, getDescripcion, edad = 11 }) => {
  console.log(getDescripcion());
};
imprimirPersonaje(personaje);
