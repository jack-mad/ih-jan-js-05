//Objetos
//no primitivo 
//compuestos por clave : valor
const mexico = {
    comida:"Tacos"

};
console.log(mexico);

//dot notation para acceder a una propiedad de un objeto
console.log(mexico.comida);

//bracket notation para acceder a una propiedad de un objeto
console.log(mexico["comida"]);

const olympicRecords = {
    athletics100Men : "Justin Gatlin",
    athleticsLongJumpMen : "Mike Power",
    athleticsSwimming200Men : "Michael Phelps",
    "swimming 200 Women": "Ariarne Titmus" // propiedades con espacios, caracteres especiales, 
};

//dot notation para acceder a una propiedad de un objeto
console.log(olympicRecords.athleticsSwimming200Men);

//bracket notation para acceder a una propiedad de un objeto
console.log(olympicRecords["athleticsSwimming200Men"]);

console.log(olympicRecords["swimming 200 Women"]);

const refresco = {
    nombre: "Coca cola",
    color: "Oscuro",
    precio: 12,
    tamanos: [600, 1000]
}

//agregar valores
refresco.envase = "Plastico";
refresco["competidor"] = "pepsi"

console.log("Objeto de refresco", refresco)