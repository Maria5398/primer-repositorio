let alumno = function (nombre,edad){
    this.nombre = nombre ;
    this.edad = edad ; 
}
//console.log (alumno()) // no funciona ya que no tiene parametros 

let alumno1 = new alumno ('malia', 20)

console.log (alumno1)