function leetSpeak(phrase){
    phrase = phrase.toUpperCase();
    for (var i = 0; i < phrase.length; i++){
        switch(phrase[i]){
            case("A"):
            phrase = phrase.replace("A", "4")
                break;
            case("E"):
            phrase = phrase.replace("E", "3")
                break;
            case("G"):
            phrase = phrase.replace("G", "6")
                break;
            case("I"):
            phrase = phrase.replace("I", "1")
                break;
            case("O"):
            phrase = phrase.replace("O", "0")
                break;
            case("S"):
            phrase = phrase.replace("S", "5")
                break;
            case("T"):
            phrase = phrase.replace("T", "7")
                break;
            default:
                break;
        }
    }
    return phrase;
}
leet = leetSpeak('Hello my name is Carol');
console.log(leet);