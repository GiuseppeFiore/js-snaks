// Snack 1
// L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.

const a = Number(prompt("Inserisci il primo numero:"));
const b = Number(prompt("Inserisci il secondo numero:"));

if (a > b) {
    console.log("Il maggiore è: " + a);
} else if (b > a) {
    console.log("Il maggiore è: " + b);
} else {
    console.log("I due numeri sono uguali: " + a);
}