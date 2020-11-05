let calculadora = {
    sumar : function ( A , B ){
        return A + B
    },

restar : function ( C , D ){
    return C - D 
},
multiplicar : function ( E , F){
    return E * F
},
dividir : function ( G , H ){
    if ( G !== 0  && H !== 0){
        return G/H
    }else {
        return "system error"
    }}}
console.log (calculadora.sumar ( 3,4))
console.log (calculadora.restar (7,24))
console.log (calculadora.multiplicar (2,7))
console.log (calculadora.dividir (298,45))  