console.log('Inicio del script'); // 01

setTimeout(() => {
  console.log('Primer TimeOut'); // 05
}, 5000);

setTimeout(() => {
  console.log('Segundo TimeOut'); // 03
}, 0);

setTimeout(() => {
  console.log('Tercer TimeOut'); // 04
}, 0);

console.log('Fin del script'); // 02
