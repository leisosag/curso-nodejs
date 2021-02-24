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
  },
];

const getPersonajeById = (id) => {
  return new Promise((resolve, reject) => {
    const personaje = personajes.find((p) => p.id === id);

    if (personaje) {
      resolve(personaje);
      return;
    }
    reject(`el personaje ${id} no existe`);
  });
};

const getPuntajeById = (id) => {
  return new Promise((resolve, reject) => {
    const puntaje = puntajes.find((p) => p.id === id);

    if (puntaje) {
      resolve(puntaje);
      return;
    }
    reject(`el puntaje ${id} no existe`);
  });
};

const idx = 3;
let nombre;

getPersonajeById(idx)
  .then((personaje) => {
    nombre = personaje.nombre;
    return getPuntajeById(idx);
  })
  .then((puntaje) => {
    console.log(
      `El personaje con id: ${idx} es ${nombre} y tiene ${puntaje.puntaje} puntos`
    );
  })
  .catch((error) => console.log(error));
