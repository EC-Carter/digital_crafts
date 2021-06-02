let button = document.getElementById('increment');
button.addEventListener('click',(e) => {
    fetch('/api/counter',{
        method:'post'
    })
    .then(response =>response.json())
    .then(data=>{
        //console.log(data);
        let countValue = document.getElementById('countValue');
        countValue.textContent = data.value;

    })
})

let button2 = document.getElementById('decrement');
button2.addEventListener('click',()=>{
    fetch('/api/counter',{
        method:'put'
    })
    .then(response =>response.json())
    .then(data=>{
        //console.log(data);
        let countValue = document.getElementById('countValue');
        countValue.textContent = data.value;

    })
})
let button3 = document.getElementById('reset');
button3.addEventListener('click',() => {
    fetch('/api/counter',{
        method:'delete'
    })
    .then(response => response.json())
    .then(data =>{
        let countValue = document.getElementById('countValue');
        countValue.textContent = data.value;

    })
})

fetch('api/counter')
.then(data => data.json())
.then(data =>{
    //console.log(data);
    let countValue = document.getElementById('countValue');
    countValue.textContent = data.value;
})