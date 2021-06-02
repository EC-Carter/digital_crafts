// //browser method bult on top of xhr
// fetch("https://corona.lmao.ninja/v2/states")
// .then(response => response.json())
// .then((data)=>{
//     console.log(data);
// })
// .catch(()=>{

// })

// //example- may not actually work- I may have missed a piece
// console.log("before");

// let ourOwnFetch = new Promise((resolve,reject)=>{
    
//     const request = new XMLHttpRequest(); //XHR Object
//     request.onreadystatechange = function(){
//         if(this.readyState === 4){
//             let data = JSON.parse(this.responseText);
//             console.log(data);
//             resolve(this.responseText)
//         }
//     }
//     request.open("GET", "https://jsonplaceholder.typicode.com/albums");
//     request.send();

// })

// ourOwnFetch.then(result => {
//     console.log(result);
// })

// console.log("after");

//http:api.openweathermap.org/data/2.5/forecast?id=524901&appid=9366e645463c3b371d3929f7865a7f23
