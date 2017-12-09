let censoredWords=["viejo","dignidad salarial","futuro"];
let customCensoredWords=[];

function censor(palabra){
   for (p in censoredWords){
      palabra = palabra.replace(censoredWords[p], "****");
   }
   for (p in customCensoredWords){
        palabra = palabra.replace(customCensoredWords[p],"------")
   }
   return palabra;
}

function addCensoredWord(palabra){

           customCensoredWords.push(palabra);
   }
function getCensoredWords(){
          return censoredWords.concat(customCensoredWords);
  }

exports.censor= censor;
exports.addCensoredWord = addCensoredWord;
exports.getCensoredWords = getCensoredWords;

 

