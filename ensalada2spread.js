// Spread operator

let frutosRojos = ['frutilla', 'frambuesa', 'cereza']

let frutosCitricos = ['naranja', 'mandarina', 'pomelo']

let ensaladaDeFrutas = [frutosRojos, frutosCitricos]

console.log(ensaladaDeFrutas) 
// Devuelve dos array, dentro de un array.
/*  [
    [ 'frutilla', 'frambuesa', 'cereza' ],
    [ 'naranja', 'mandarina', 'pomelo' ]
  ] */

  let ensaladaDeFrutas2 = [...frutosRojos, ...frutosCitricos]

  console.log(ensaladaDeFrutas2)
  // Devuelve un array con todos los elementos
  /* [ 'frutilla', 'frambuesa', 'cereza', 'naranja', 'mandarina', 'pomelo' ] */
