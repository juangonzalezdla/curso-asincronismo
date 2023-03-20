function suma(num1, num2) {
  return num1 + num2;
}

function calcular(num1, num2, Callback) {
  return Callback(num1, num2);
}

console.log(calcular(2, 2, suma));

setTimeout(() => {
  console.log('Hola javascript');
}, 2000);

function greeting(name) {
  console.log(`Hola ${name}`);
}

setTimeout(greeting, 2000, 'Juan');