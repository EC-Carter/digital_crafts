//https://www.freecodecamp.org/news/lexical-scoping-in-javascript-e876cd221b74/
function sqrt(x) { 

    function improve(guess, x) { 
        return average(guess, (x / guess));
}

    function isGoodEnough(guess, x) {    
        return (Math.abs(square(guess) - x)) > 0.001;  
} 
    function sqrt_iter(guess, x) {    
        if (isGoodEnough(guess, x)) {    
            return guess;
            }    
            else { 
            return sqrt_iter(improve(guess, x), x);    }  
} 
    
    return sqrt_iter(1.0, x);
}


    ///// refactored with lexical scoping (look at x)
    function sqrt(x) {  
        function isGoodEnough(guess) {   
            return (Math.abs(square(guess) - x)) > 0.001;  
        }  
        function improve(guess) {    
            return average(guess, (x / guess));  
        }
        
        function sqrt_iter(guess) {   
            if (isGoodEnough(guess)) {     
                return guess;    
            }   
            else {      
                return sqrt_iter(improve(guess));    
            }  
        }  

        return sqrt_iter(1.0);
    }

