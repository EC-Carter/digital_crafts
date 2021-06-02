const request = new XMLHttpRequest(); //XHR Object
request.onreadystatechange = function(){
    if(this.readyState === 4){
        let data = JSON.parse(this.responseText);
        console.log(data);
    }
}
request.open("GET", "https://jsonplaceholder.typicode.com/albums");
request.send();