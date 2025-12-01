/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

//I principali datatype in JavaScript sono:
//
// - string
// È come una frase dentro virgolette. Esempio: "Ciao".
// Come un'etichetta con delle parole scritte sopra.
//
// - number
// Sono tutti i numeri: 5, 3.14, -10…
// Come i mattoncini LEGO con un numero stampato.
//
// - boolean
// Può essere SOLO true o false.
// Come un interruttore: acceso (true) o spento (false).
//
// - null
// Significa "non c’è niente", è volutamente vuoto.
// Come una scatola che sai essere vuota.
//
// - undefined nan
// Significa che qualcosa non è stato ancora definito.
// Come una scatola senza etichetta: non sai cosa contiene.
//
// - object
// È una scatola che contiene più cose insieme.
// Esempio: { nome: "Chris", età: 30 }.

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let myName = "Christopher";
console.log(myName);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let sum = 12 + 20;
console.log(sum);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;
console.log(x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

myName = "Filippi Armani";
console.log(myName);

const umano = "terrestre";
console.log(umano);

// umano = "alieno";
// console.log(umano); // X Uncaught TypeError: Assignment to constant variable. at D1.js:71:7

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let sottrazione = 4 - x;
console.log(sottrazione);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john";
let name2 = "John";

console.log(name1 === name2);
console.log(name1.toLowerCase === name2.toLowerCase);
