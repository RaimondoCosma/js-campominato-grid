"use strict";

// Dichiaro la variabile relativa al box__container
const boxContainer = document.getElementById('box__container');
// Inizializzo un ciclo for per creare i miei box dinamicamente dentro il box__container
for ( let i = 1; i <= 100; i++ ){
    let boxItem = document.createElement("div");
    boxItem.innerHTML = i;
    boxItem.classList.add('box__item');
    boxContainer.append(boxItem);
}