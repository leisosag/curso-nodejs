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
];

const idx = 1;

const getPersonajeById = async (id) => {
  try {
    const personaje = personajes.find((p) => p.id === id);
    if (personaje) {
      return personaje;
    }
    throw new Error(`el personaje con id ${id} no existe`);
  } catch (error) {
    throw error;
  }
};

const getPuntajeById = async (id) => {
  try {
    const puntaje = puntajes.find((p) => p.id === id);
    if (puntaje) {
      return puntaje;
    }
    throw new Error(`el puntaje con id ${id} no existe`);
  } catch (error) {
    throw error;
  }
};

const getDatos = async (idx) => {
  try {
    const personaje = await getPersonajeById(idx);
    const puntaje = await getPuntajeById(idx);
    return {
      id: idx,
      nombre: personaje.nombre,
      puntaje: puntaje.puntaje,
    };
  } catch (error) {
    throw error;
  }
};

getDatos(idx)
  .then((data) =>
    console.log(
      `el personaje con id ${data.id} es ${data.nombre} y tiene ${data.puntaje} puntos`
    )
  )
  .catch((err) => console.log(err.message));
