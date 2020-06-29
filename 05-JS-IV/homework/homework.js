// No cambies los nombres de las funciones.

function crearGato(nombre, edad) {
  // Completed
  var newObject1={
    nombre: nombre,
    edad: edad,
    meow: function(){return "Meow!";},
  }
  return newObject1;
}


function agregarPropiedad(objeto, property) {
  // Completed
  objeto[property]=null;
  return objeto;
}

function invocarMetodo(objeto, metodo) {
  // Completed
  objeto[metodo]();
}


function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  // Completed
  parseInt(objetoMisterioso["numeroMisterioso"] *= 5);
  return objetoMisterioso["numeroMisterioso"];
}

function eliminarPropiedad(objeto, propiedad) {
  // Completed:
  objeto[propiedad]=Object;
  delete objeto[propiedad];
  return objeto;
}

function nuevoUsuario(nombre, email, password) {
  // Completed:
  var objeto={
    nombre: nombre,
    email: email,
    password: password,
  }
  return objeto;
}

function tieneEmail(usuario) {
  // Completed: 
  switch(usuario["email"]){
    case null: return false; break;
    case undefined: return false; break;
    default: return true; break;
  }
  // if(usuario["email"]){return true;} else {return false;}
}


function tienePropiedad(objeto, propiedad) {
  // Completed:
  if (objeto[propiedad]){return true;}
  else {return false;}
  //objeto.hasOwnProperty(propiedad);
}
  

function verificarPassword(usuario, password) {
  // Completed:
  if (password===usuario["password"]){return true;}else{return false;}
  // return usuario["password"]===password;
}

function actualizarPassword(usuario, nuevaPassword) {
  // Completed:
  usuario["password"]= nuevaPassword;
  return usuario;
}

function agregarAmigo(usuario, nuevoAmigo) {
  // Completed:
  usuario["amigos"].push(nuevoAmigo);
  return usuario; 
}

function pasarUsuarioAPremium(usuarios) {
  // Completed:
  for (var i=0; i < usuarios.length; i++){
  usuarios[i].esPremium = true;}
  return usuarios;
}

function sumarLikesDeUsuario(usuario) {
  // Completed:
  let sum =0
  for (let i = 0; i< usuario.posts.length; i++){
    sum += usuario.posts[i].likes;
  }

  return sum;
}

function agregarMetodoCalculoDescuento(producto) {
  // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
  // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]") y "porcentajeDeDescuento" para obtener el descuento
  // El método resta el descuento del precio y devuelve el precio con descuento
  // Ejemplo:
  // producto.precio -> 20
  // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
  // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
  // Tu código:
  producto.calcularPrecioDescuento = function(){
    return this.precio - (this.precio * this.porcentajeDeDescuento);
  };
 return producto;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearGato,
  agregarPropiedad,
  invocarMetodo,
  multiplicarNumeroDesconocidoPorCinco,
  eliminarPropiedad,
  nuevoUsuario,
  tieneEmail,
  tienePropiedad,
  verificarPassword,
  actualizarPassword,
  agregarAmigo,
  pasarUsuarioAPremium,
  sumarLikesDeUsuario,
  agregarMetodoCalculoDescuento,
};