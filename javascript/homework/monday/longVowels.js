    // the scope of this project as written in the assignment SEEMS imposible to 
    // do without the use of some  slightly complex regular expressions I only half 
    //understand how to write. If there is a simpler way to accomplish matching 
    //an e at the end of words OR double vowels of any kind I'd love to go over
    //that when possible!
    
    // check to see if a word has multiple vowels in a row
    //if so replace vowels with vowels times 5

    //check to see if the word ends in e
    //if so replace any vowel or vowel group in word except the ending e with vowel times 5

//Simplified version that isn't really what was asked for

function longVowels(phrase){
    var phrase = phrase.toLowerCase();
    var newPhrase = "";
    for(var i = 0; i < phrase.length; i++){

        switch(phrase[i]){
            case "a":
                newPhrase += "aaaaa";
                break;
            case "e":
                newPhrase += "eeeee";
                break;
            case "i":
                newPhrase += "iiiii";
                break;
            case "o":
                newPhrase += "ooooo";
                break;
            case "u":
                newPhrase += "uuuuu";
                break;
            default:
                newPhrase += phrase[i];
                break;
        }
        
    }
    return newPhrase;
}

    var long = longVowels("carol");
    console.log(long);