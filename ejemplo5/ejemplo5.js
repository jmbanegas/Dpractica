'use strict'
let indiceLibro = programmingBooks.indexOf("You Don't Know JS");
if (indiceLibro !== -1) {
    alert(`El libro está en la estantería número ${indiceLibro}`);
} else {
    alert("El libro no se encuentra en la biblioteca");
}
