let fs=require('fs')
let traemos={
    archivo:'./tareas',
    leer:fs.readFileSync(this.archivo,'utf-8'),
    leerParse:JSON.parse(this.leer)
}