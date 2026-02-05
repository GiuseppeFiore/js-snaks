// Snack 3
// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

let somma = 0;

for (let i = 0; i < 10; i++) {
    const numero = Number(prompt(`Inserisci il numero ${i + 1}:`));
    somma += numero;
}

console.log("La somma totale è: " + somma);