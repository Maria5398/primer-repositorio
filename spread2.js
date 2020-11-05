let comision4 = {
    nombreComision : 'comision 4',
    turno : 'mañana',
    horario : '11:30 - 13:30',
    profesores : ['Eric','Jonatan']
}

let comision5 = {
    nombreComision : 'los del fondo',
    turno : 'tarde',
    horario : '17:00 - 19:00',
    profesores : ['Eric','Maximo']
}

let alumna = {
    nombre : 'Sofia',
    apellido : 'Vázquez',
    ...comision4
}

let alumno = {
    nombre : 'Santiago',
    apellido : 'Ramirez',
    ...comision4
}

console.log(alumno)
