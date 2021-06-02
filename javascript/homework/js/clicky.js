/*
  - guess the color (hint: it's "red")
  - disable a link
  - hijack a link
*/

// Variables
const correctAnswer = "red";
const redButton = document.getElementById('red');
const greenButton = document.getElementById('green');
const blueButton = document.getElementById('blue');
const dcLink = document.getElementById('dcLink');

// Function
function handleClick(event) {
    console.log('you clicked a button!');
    // console.log(event);
    // console.log(event.value);
    console.log(event.target.value);
    // Earth.USA.Atlanta.Georgia.EastLake.ChrisHouse

    if(event.target.value === correctAnswer){
        console.log('You got the right answer 🥳 ')
    } else {
        console.log('🥴 nope you got it wrong')

    }
}

function linkClick(event){
    event.preventDefault();
    console.log('You are leaving the page!Good Bye!😃');


}

// Set the click for each button
redButton.addEventListener('click', handleClick);
greenButton.addEventListener('click', handleClick);
blueButton.addEventListener('click', handleClick);
dcLink.addEventListener('click',linkClick)