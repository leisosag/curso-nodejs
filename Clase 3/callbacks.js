// con funcion anonima
/*
setTimeout(() => {
  console.log('hola mundo');
}, 2000);
*/

// con funcion declarada
/*
const saludar = () => {
  console.log('hola mundo');
};
setTimeout(saludar, 1000);
*/

/* 
const getUserById = (id, callback) => {
  const user = {
    id,
    nombre: 'Harry',
  };

  setTimeout(() => {
    callback(user);
    return user;
  }, 3000);
};

getUserById(1, ({ nombre }) => {
  console.log(`Hola ${nombre}`);
});
*/
