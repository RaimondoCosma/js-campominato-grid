"use strict";

/*-----------------------
    FUNCTIONS
-----------------------*/
function boxCreation (howManyBox, howManyColumn) {
     // Svuoto il contenuto prima di inserire i box per renderlo più dinamico al cambio di difficoltà
     boxContainer.innerHTML = "";
     // Inizializzo un ciclo for per creare i miei box dinamicamente dentro il box__container
     for ( let i = 1; i <= howManyBox; i++ ){
         let boxItem = document.createElement("div");
         boxItem.innerHTML = i;
         boxItem.classList.add('box__item',`box__item${howManyColumn}`);
         boxContainer.append(boxItem);
         // Aggiungo evento click al box della cella
         boxItem.addEventListener("click", function(){
             this.classList.toggle("bg-change");
             console.log(`Hai cliccato la casella numero: ${this.innerHTML}`);
         })
     }
}
/*-----------------------
    MAIN
-----------------------*/
// Dichiaro la variabile relativa al box__container
const boxContainer = document.getElementById('box__container');

// Dichiaro la variabile relativa al bottone play
const play = document.getElementById('play__btn');

// Aggiungo evento al play che mostra la griglia
play.addEventListener('click', function(){
    boxContainer.classList.add('show');
    // Aggiungo variabile relativa al value delle opzioni:
    let difficulties = document.querySelector('#difficulties').value;
    // Aggiungo le condizioni del livello di difficoltà facendo comparire griglie diverse
    if ( difficulties === "Hard" ){
        // Svuoto il contenuto prima di inserire i box per renderlo più dinamico al cambio di difficoltà
        boxContainer.innerHTML = "";
        // Richiamo la funzione con i parametri per la difficoltà Difficile
       boxCreation(100, 10);

    } else if ( difficulties === "Normal" ){
        // Svuoto il contenuto prima di inserire i box per renderlo più dinamico al cambio di difficoltà
        boxContainer.innerHTML = "";
        // Richiamo la funzione con i parametri per la difficoltà Normale
        boxCreation(81, 9);

    } else {
        // Svuoto il contenuto prima di inserire i box per renderlo più dinamico al cambio di difficoltà
        boxContainer.innerHTML = "";
        // Richiamo la funzione con i parametri per la difficoltà Facile
        boxCreation(49, 7);
    }
})