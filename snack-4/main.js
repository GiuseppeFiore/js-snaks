// Snack 4
// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.

const numeriDispari = [];

for (let i = 0; i < 6; i++) {
    const numero = parseInt(prompt(`Inserisci il numero ${i + 1}`));

    if (numero % 2 !== 0) {
    numeriDispari.push(numero);
    }
}

console.log(numeriDispari);