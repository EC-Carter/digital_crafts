function tipAmount(bill,serviceLevel){
    switch(serviceLevel){
            case "good":
                var tipPer = .2;
                break;
            case "fair":
                var tipPer = .15;
                break;
            case "poor":
                var tipPer = .1;
                break;
            default:
                break;
    

}
tip = bill * tipPer;
    return tip;
}
// var toTip = tipAmount(100,"poor");
// console.log(toTip);

function totalAmount(bill,serviceLevel){
    tip = tipAmount(bill, serviceLevel);
    total = bill + tip;
    return total;
}

// var total = totalAmount( 10,"good")
// console.log(total);

function splitAmount(bill, serviceLevel, people){
    total = totalAmount(bill, serviceLevel);
    perPerson = total / people;
    return perPerson;
}
ppBill = splitAmount(90, "good", 3);
console.log(ppBill)