// Do not change any of the function names

function invocarCallback(cb) {
  // Invoca al callback `cb`
  return cb(cb);
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  var total = numeros.reduce(function(acc, curr){
    return acc + curr;
  },0);
  cb(total);
  /*let x=0;
  for (let i=0; i<numeros.length; i++){
    x = x + numeros[i];
  }
  cb(x);*/
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  array.forEach(cb);
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  let x = array.map(function(y){
    return cb(y);
  });
  return x;
  /*let k = [];
    for (let i=0; i<array.length;i++){
    k.push(cb(array[i]));
  }*/
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  invocarCallback,
  sumarArray,
  forEach,
  map,
};
