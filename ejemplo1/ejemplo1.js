'use strict'
// Ingresar un nombre con promp y verificar si el nombre ingresado se encuentra en el
//vector

let students = ["Juan", "Jose", "Pedro", "Maria", "Alejandra"];
let nombreIngresado = prompt("Ingrese un nombre:");
if (students.includes(nombreIngresado)) {
    alert("Si se encuentra");
} else {
    alert("No se encuentra");
}