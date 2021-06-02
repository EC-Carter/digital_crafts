function printBox(width,height){
    var line = "";
    var line2 = "";
    var char = "*";
    var space = " ";
    //creates top and bottom lines
    for(var i = 0; i < width; i++){
        line = line + char;
    }
    //creates middle lines
    for(var i = 0; i < width-2; i++){
        line2 = line2 + space
    }
    //prints all to terminal
    console.log(line)
    for(var i = 0; i < height-2; i++){
        console.log(char + line2 + char)
    }
    console.log(line)
}
//function call
printBox(7,3)
