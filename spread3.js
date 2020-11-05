let persona = {
    nombre : 'Jorge',
    apellido : 'Ibañez',
    edad : 26,
    profesión : 'mecánico',
    hijos : ['Marcos','Miguel','Marcelo'],
    nombreCompleto : function(){
        return this.nombre + ' ' + this.apellido
    }

}

//console.log(persona.nombre);

/* for (const propiedad in persona) {
   console.log(persona[propiedad]);
} */

let {nombre,apellido} = persona;


/* for (const hijo of hijos) {
    console.log(hijo)
} */

console.log('El nombre de persona es: ' + nombre)

console.log(persona.nombre)
