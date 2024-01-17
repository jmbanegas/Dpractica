'use strict'
//Cada libro del ejercicio anterior se encuentra ubicado en una estantería diferente
//dentro de una biblioteca, el índice del vector indica el numero de la estantería.
//Mostrar el numero de la estantería donde se encuentra el libro “You Don’t Know JS”

let indiceLibro = programmingBooks.indexOf("You Don't Know JS");
if (indiceLibro !== -1) {
    alert(`El libro está en la estantería número ${indiceLibro}`);
} else {
    alert("El libro no se encuentra en la biblioteca");
}
