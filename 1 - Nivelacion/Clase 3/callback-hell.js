const personajes = [
  {
    id: 1,
    nombre: 'Harry',
  },
  {
    id: 2,
    nombre: 'Hermione',
  },
  {
    id: 3,
    nombre: 'Ron',
  },
];

const puntajes = [
  {
    id: 1,
    puntaje: 100,
  },
  {
    id: 2,
    puntaje: 200,
  },
  {
    id: 3,
    puntaje: 300,
  },
];

const getPersonajeById = (id, callback) => {
  const personaje = personajes.find((p) => p.id === id);

  if (personaje) {
    callback(personaje);
    return;
  }
  callback(new Error('el personaje no existe'));
};

const idSeleccionado = 1;

getPersonajeById(idSeleccionado, (error, personaje) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(`El personaje es: ${personaje.nombre} `);
});
