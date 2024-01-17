'use strict'
// En base al resultado del ejercicio anterior agrupar en un array únicamente las
//palabras que tengan mas de 3 letras.
let phrase = 'La programación web es fundamental para el progreso';
let palabras = phrase.split(' ');
let palabrasLargas = palabras.filter(palabra => palabra.length > 3);

alert(`Palabras con más de 3 letras: ${palabrasLargas.join(', ')}`);
