"use strict";

// Dichiaro la variabile relativa al box__container
const boxContainer = document.getElementById('box__container');
// Dichiaro la variabile relativa al bottone play
const play = document.getElementById('play__btn');
// Aggiungo evento al play che mostra la griglia
play.addEventListener('click', function(){
    boxContainer.classList.add('show');
})
// Inizializzo un ciclo for per creare i miei box dinamicamente dentro il box__container
for ( let i = 1; i <= 100; i++ ){
    let boxItem = document.createElement("div");
    boxItem.innerHTML = i;
    boxItem.classList.add('box__item');
    boxContainer.append(boxItem);
    // Aggiungo evento click al box della cella
    boxItem.addEventListener("click", function(){
        this.classList.toggle("bg-change");
        console.log(`Hai cliccato la casella numero: ${this.innerHTML}`);
    })
}