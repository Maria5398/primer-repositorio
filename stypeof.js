let nombre = "mary";
let edad = 21 ;
let estudiante = true ; 

//console.log (nombre) // muestra el valor que contiene la varible nombre 
//console.log (typeof nombre) // muestra el tipo de dato que contiene la variable nombre 

// if(typeof edad === number){} // no funciona ya que busca una variable con el nombre NUMBER 
 
//if(typeof edad === "number"){} // este si funciona ya que me debuele el valor como una cadena de texto 

//console.log (typeof estudiante ) // tipo de dato que contiene la variable llamada estudiante 


let alumno = ["mary", 21 , true ] // es un array 

console.log ( typeof alumno )// aunque la variable es una array, este indica que es un object 

let usuario = { nombre: "mary" , edad : 21 , estudia : true } // declaro mi objeto literal

let usuario2 = { nombre: "maru" ,
 edad : 21 , 
 estudia : false,
nombreCompleto : function(){// dentro de un objeto literal se puede hacer funciones 
        return this.nombre + ' ' + this.edad // en este caso se una el sigo mas (+) como union de las palabras
        // o en este caso datos, en ves de escribir usuario.nombre se usa (this.)nombre 
} } // declaro mi objeto literal, no importa si el contenido 
// de este es igual a otro usuario ya que este usuario es diferente

console.log ( typeof usuario) // para javascript sigue siendo un object ya sea array o un objeto literal 

console.log (usuario.nombre) // me muestra el contenido que tiene la variable nombre 

console.log (usuario.nombreCompleto) // me salta error o mas bien no los datos que deseamos nombreCompleto : function()
// eso deberiamos de visualizar, para visualizar los datos que tiene la funcion 
console.log (usuario.nombreCompleto()) // para ejecutar la funcion debemos pones esos parenticis que representan funcion 




