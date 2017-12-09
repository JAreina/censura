let censor = require("censura");

console.log(censor.getCensoredWords());
console.log(censor.censor("Se necesita dignidad salarial"));
censor.addCensoredWord("opinión");
console.log(censor.getCensoredWords());
console.log(censor.censor("Alguna opinión es delito"));

