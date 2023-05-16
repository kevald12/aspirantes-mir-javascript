
let Pedro = {
    nombre: "Pedro Perez",
    edad: 30,
    activo: true,
    hobbies: [ "programar",
    "squash",
    "piano"],
    saluda: function (){
        console.log("Hola me llamo " + this.nombre);
    }
}
Pedro.saluda()

console.log(Pedro.edad);
Pedro.estatura= 1.8
delete Pedro.activo

for (let llave in Pedro) {
    if (Pedro.hasOwnProperty(llave)) {
      console.log(Pedro[llave] + ":")
    }
  }

