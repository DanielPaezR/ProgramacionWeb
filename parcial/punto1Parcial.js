/* Tienes un arreglo (llamado myArray) con 5 elementos (enteros en el rango de 1 a 100).
Escribe un programa en Javascript o nodejs que imprima el número más alto del arreglo
(Si se repite, solo imprimir una vez). El programa solo debe imprimir el número, sin ningún
texto. */

let myArray = [];
let numeroMayor = 0;


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


for (let i = 0; i <= 4; i++){
    myArray.push(getRandomInt(101));
} 

for (let i = 0; i <= 4; i++){
    if (myArray[i] > numeroMayor){
        numeroMayor = myArray[i];
        break;
    } 
}

console.log(numeroMayor);

