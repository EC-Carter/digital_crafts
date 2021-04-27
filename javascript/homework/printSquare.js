function printSquare(num){
    var line = "";
    var char = "*";
    for(var i = 0; i < num; i++){
        line = line + char;
    }
    for(var i = 0; i < num; i++){
        console.log(line)
    }
    
    
}

printSquare(10)