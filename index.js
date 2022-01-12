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


//
const schoolSystem = {
    schools: [
       {
        name: "Fake School 1",
        classRooms: [
          {
            teacher: { firstName: 'Marcelino', lastName: 'Padberg', age: 25 },
            students: [
                { firstName: 'Aliyah', lastName: 'Schulist', age: 18 },
                { firstName: 'Cleveland', lastName: 'Towne', age: 28 },
                { firstName: 'Jan', lastName: 'Quitzon', age: 18 },
                { firstName: 'Alaina', lastName: 'Runolfsdottir', age: 18 },
                { firstName: 'Gerhard', lastName: 'Bergstrom', age: 23 }
              ]
          },
          {
            teacher: { firstName: 'Edwardo', lastName: 'Schowalter', age: 28 },
            students: [
              { firstName: 'Manley', lastName: 'Doyle', age: 18 },
              { firstName: 'Maximilian', lastName: 'Gleichner', age: 19 },
              { firstName: 'Sid', lastName: 'Rohan', age: 30 },
              { firstName: 'Catalina', lastName: 'Hilpert', age: 27 },
              { firstName: 'Gerald', lastName: 'O\'Keefe', age: 26 }
            ]
          }
        ]
       },
       {
        name: "Fake School 2",
        classRooms: [
          {
            teacher: { firstName: 'Lucas', lastName: 'Schroeder', age: 29 },
            students: [
              { firstName: 'Giuseppe', lastName: 'Hegmann', age: 24 },
              { firstName: 'Jennyfer', lastName: 'Hane', age: 19 },
              { firstName: 'Mikayla', lastName: 'Braun', age: 23 },
              { firstName: 'Rickie', lastName: 'White', age: 22 },
              { firstName: 'Rose', lastName: 'Collins', age: 30 }
            ]
          },
          {
            teacher: { firstName: 'Green', lastName: 'Sauer', age: 25 },
            students: [
              { firstName: 'Melany', lastName: 'Welch', age: 25 },
              { firstName: 'Paxton', lastName: 'Corkery', age: 22 },
              { firstName: 'Nellie', lastName: 'Hauck', age: 26 },
              { firstName: 'Eunice', lastName: 'Hirthe', age: 26 },
              { firstName: 'Aylin', lastName: 'Barrows', age: 26 }
             ]
           }
         ]
       },
       {
        name: "Fake School 3",
        classRooms: [
          {
            teacher: { firstName: 'Nikko', lastName: 'Crist', age: 42 },
            students: [
              { firstName: 'Christop', lastName: 'Hahn', age: 26 },
              { firstName: 'Newell', lastName: 'Kemmer', age: 27 },
              { firstName: 'Katheryn', lastName: 'Heller', age: 26 },
              { firstName: 'Saul', lastName: 'Heathcote', age: 20 },
              { firstName: 'Maudie', lastName: 'Haley', age: 30 }
            ]
          },
          {
            teacher: { firstName: 'Nathanael', lastName: 'Hansson', age: 50 },
            students: [
              { firstName: 'Jensen', lastName: 'Reichel', age: 21 },
              { firstName: 'Lois', lastName: 'Kulas', age: 28 },
              { firstName: 'Caterina', lastName: 'Wolff', age: 28 },
              { firstName: 'Dahlia', lastName: 'Collier', age: 24 },
              { firstName: 'Linwood', lastName: 'Langosh', age: 26 }
            ]
          }
        ]
      }
    ]
  };
  
  
console.log(schoolSystem.schools[2].classRooms[0].students[0].firstName);  
   
//Add a student with the name of Lucille D. Lozano to Fake School 2, in the first classroom.
schoolSystem.schools[1].classRooms[0].students.push({
	firstName: "Lucille D.",
	lastName: "Lozano"
})
console.log(schoolSystem.schools[1].classRooms[0].students); 
//Retrieve the “Fake School 3” object
console.log(schoolSystem.schools[2]);  
//Retrieve the teacher with the first name of “Nathanael”
console.log(schoolSystem.schools[2].classRooms[1].teacher.firstName);  
//Retrieve the student with the first name of “Saul”
console.log(schoolSystem.schools[2].classRooms[0].students[3].firstName);  
  
  
  
  