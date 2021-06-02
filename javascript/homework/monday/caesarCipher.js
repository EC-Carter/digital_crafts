
function cipher(phrase,offset){
    phrase = phrase.toLowerCase();
    var letters = "abcdefghijklmnopqrstuvwxyz";
    phraseEncrypt ="";
    for(var i = 0; i< phrase.length; i++){
        if(phrase[i].toLowerCase() != phrase[i].toUpperCase()){
            n = letters[(letters.indexOf(phrase[i]) + offset) % 26];
        }
        else{
            n = phrase[i];
        }
        phraseEncrypt = phraseEncrypt.concat(n);
    }
    return phraseEncrypt;
}

var encrypted = cipher("Carol Carter",10);
console.log(encrypted)