

let form = document.getElementById('bankingForm');

form.addEventListener('submit',(e) => {
    e.preventDefault();
    let amount = document.getElementById('amount');
    let transType = document.getElementById('transType');
    let obj = {
        amount:amount.value,
        transType:transType.value
    }
    fetch('/depositchecking',{
        method:"POST",
        headers:{
            "Content-type": "application/json; charset=UTF-8"
        },
        body:JSON.stringify(obj)
    })

    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    
})