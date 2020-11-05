let traemos={
    archivo:'./tareas.json',
    leer:function(){
        return fs.readFileSync(this.archivo,'utf-8')
    },
    leerParse: function(){
       return JSON.parse(this.leer())
    }
}
console.log(traemos.leerParse())