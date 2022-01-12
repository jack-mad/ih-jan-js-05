//Objetos
//no primitivo 
//compuestos por clave : valor
const mexico = {
    comida:"Tacos"

};
//console.log(mexico);

//dot notation para acceder a una propiedad de un objeto
//console.log(mexico.comida);

//bracket notation para acceder a una propiedad de un objeto
//console.log(mexico["comida"]);

const olympicRecords = {
    athletics100Men : "Justin Gatlin",
    athleticsLongJumpMen : "Mike Power",
    athleticsSwimming200Men : "Michael Phelps",
    "swimming 200 Women": "Ariarne Titmus" // propiedades con espacios, caracteres especiales, 
};

//dot notation para acceder a una propiedad de un objeto
//console.log(olympicRecords.athleticsSwimming200Men);

//bracket notation para acceder a una propiedad de un objeto
//console.log(olympicRecords["athleticsSwimming200Men"]);

//console.log(olympicRecords["swimming 200 Women"]);

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

//console.log("Objeto de refresco", refresco)

//C. Propiedades y ciclos
//Object.keys()
//Permite convertir las propiedades de un objeto en elementos de un arreglo 

const arrRefresco = Object.keys(refresco);

//console.log(arrRefresco);

//for ... in
//for( variable key in objeto)
for(let key in refresco){
    //console.log(`La propiedad es ${key}`)

    if( key === "competidor") console.log("Encontré la prop competidor")
}




//object.values(), convierte los valores de un objeto en elementos de un arreglo

const arrRefrescoVal = Object.values(refresco);
//console.log(arrRefrescoVal);

// for ... in

// for (VARIABLE KEY in OBJECT)
for (let key in refresco ) {
	// console.log(`La propiedad es: ${key}`)

	// if(key === "competidor") console.log("Encontré la prop competidor")

	//console.log(`La propiedad es ${key} y su valor es ${refresco[key]}`)


}

//Arreglos con objetos

const mike =[
    {
        name: "mike",
        edad:34
    }
]

//console.log(mike[0].edad)

let estudiantesIH = [
	{
		name: "Leo",
		location: "Querétaro",
		weather: "Frijolito"
	},
	{
		name: "Joaquín",
		location: "Hidalgo",
		weather: "Frijolito duro"
	},
	{
		name: "Alan",
		location: "Atizapan",
		weather: "Frijolito poquito"
	},
	{
		name: "Alexis",
		location: "Aguascalientes",
		weather: "Frijolito poquito"
	}
]

console.log(estudiantesIH[2].location)

// JS TRADICIONAL - ES5
estudiantesIH.push({
	name: "Emmanuel",
	location: "CDMX",
	weather: "Calorcito"
})

console.log(estudiantesIH)
// JS MODERNO - ES6
estudiantesIH=[
    ...estudiantesIH, // spread operator, pasa todos los valores existentes 
    {
        name:"Roman",
        location: "CDMX",
        weather: "calorcito"
    }
]
console.log(estudiantesIH)

//Array

let spacexRockets=[
    {
        name: "falcon 1",
        launch:"24/03/06",
        status: "Retired"
    },
    {
        name: "falcon 9 v1.0",
        launch:"4/06/10",
        status: "Success"
    },
    {
        name: "falcon 9 v1.1",
        launch:"23/09/13",
        status: "Retired"
    },
    {
        name: "falcon Heavy",
        launch:"6/02/18",
        status: "Success"
    }
]

console.log(spacexRockets[3].launch);
console.log(spacexRockets[0].status);
console.log(spacexRockets[1].name);