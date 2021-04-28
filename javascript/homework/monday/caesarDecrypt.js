
function decipher(phrase,offset){
    phrase = phrase.toLowerCase();
    var letters = "abcdefghijklmnopqrstuvwxyz";
    phraseDecrypt ="";
    for(var i = 0; i< phrase.length; i++){
        if(phrase[i].toLowerCase() != phrase[i].toUpperCase()){
            n = letters[(letters.indexOf(phrase[i]) + offset) % 26];
        
        }
        else{
            n = phrase[i];
        }
        phraseDecrypt = phraseDecrypt.concat(n);
    }
    console.log(phraseDecrypt)
}

decipher("Carol",13)