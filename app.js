let numSecret;
let attempt = 1;
// Asi se declara un arreglo en Js
let numbersGet = [];
let numberMaxium = 10;
function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
}

function verificarIntento() {
  let numUser = parseInt(document.getElementById("valueUser").value);
  console.log(numSecret);
  console.log(attempt);
  if (numUser === numSecret) {
    asignarTextoElemento(
      "p",
      `Usted acerto en ${attempt} ${attempt === 1 ? "vez" : "veces"}`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    limpiarCaja();
    if (numUser > numSecret) {
      asignarTextoElemento("p", "El numero secreto es menor");
    } else {
      asignarTextoElemento("p", "El numero secreto es mayor");
    }
    attempt++;
  }
  return;
}
function limpiarCaja() {
  document.querySelector("#valueUser").value = "";
}
function generarRandom() {
  let numSecret = Math.floor(Math.random() * 10) + 1;
  // Si el nummero generado esta incluido enla lista hacemos algo y si no seguimos
  console.log(numSecret);
  console.log(numbersGet);
  if (numbersGet.length == numberMaxium) {
    asignarTextoElemento("p", `Ya se sortearon todos los números posibles`);
  } else {
    if (numbersGet.includes(numSecret)) {
      return generarRandom();
    } else {
      numbersGet.push(numSecret);
      return numSecret;
    }
  }
}

function condicionesIniciales() {
  asignarTextoElemento("h1", "Juego del número secreto");
  asignarTextoElemento("p", `Indica un número entre el 1 y el ${numberMaxium}`);
  numSecret = generarRandom();
  attempt = 1;
}

function starOver() {
  limpiarCaja();
  condicionesIniciales();
  document.getElementById("reiniciar").setAttribute("disabled", "true");
}
condicionesIniciales();

function reverseList(array) {
  console.log(array.reverse());
}
