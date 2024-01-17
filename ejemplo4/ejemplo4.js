'use strict'
const programmingBooks = [
    // Lista de libros
];

let tituloIngresado = prompt("Ingrese el título de un libro:");
if (programmingBooks.includes(tituloIngresado)) {
    alert("El libro está en la lista");
} else {
    alert("El libro no se encuentra en la lista");
}
