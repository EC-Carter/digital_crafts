function printBanner(text){
    var line = "";
    var char = "*";
    var space = " ";
    //creates top and bottom lines
    for(var i = 0; i < text.length + 4; i++){
        line = line + char;
    }
    //prints all to terminal
    console.log(line);
    console.log(char + space + text + space + char);
    console.log(line);
}
//function call
printBanner("It is your birthday.")
