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

// B. AGREGAR PROPIEDADES

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

//C. Propiedades y ciclos
//Object.keys()
//Permite convertir las propiedades de un objeto en elementos de un arreglo 

const arrRefresco = Object.keys(refresco);

console.log(arrRefresco);

//for ... in
//for( variable key in objeto)
for(let key in refresco){
    console.log(`La propiedad es ${key}`)

    if( key === "competidor") console.log("Encontré la prop competidor")
}




//object.values(), convierte los valores de un objeto en elementos de un arreglo

const arrRefrescoVal = Object.values(refresco);
console.log(arrRefrescoVal);

// for ... in

// for (VARIABLE KEY in OBJECT)
for (let key in refresco ) {
	// console.log(`La propiedad es: ${key}`)

	// if(key === "competidor") console.log("Encontré la prop competidor")

	console.log(`La propiedad es ${key} y su valor es ${refresco[key]}`)


}

//Arreglos con objetos
