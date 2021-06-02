function takeShower(soapScent){
    return `Showering with ${soapScent} soap`
}

function eatBreakFast(time){
    console.log(`I prepare my food around ${time}`);
    let meal = cookFood();
    return `Eating ${meal}`
}

function cookFood(){
    let items = ["Oatmeal", "Eggs", "Protein Shake"];
    return items[Math.floor(Math.random()*items.length)];
}

function wakeUp(time){
    console.log(`I wake up at ${time}`);
    let shower = takeShower('lavender')
    console.log(shower);
    eatBreakFast("8:35");
    console.log("Ok ready to go to work!")
}

let condition = true;
if(condition){
    console.log('inside if condition');
}

let whileCondition = true;

while(whileCondition){
    //some more code to execute
    whileCondition = false;
}
wakeUp("8:00am")