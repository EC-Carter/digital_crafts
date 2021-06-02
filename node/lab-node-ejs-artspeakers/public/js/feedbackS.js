//static front end file


//grab api data and display all messages
//runs as soon as page loads
fetch('/api')
.then(response => response.json())
.then(data=>{
    //grab dom element
    //attach data to it
    console.log(data);
    updateFeedback(data);

})

//make a post fetch request when new message submitted
//retrieve form from dom
//attach event listenter to form that listens for submit
let form = document.querySelector('form');
form.addEventListener('submit',(e) => {
    //prevent default behavior
    e.preventDefault();
    //make fetch call to /apil post method to attach form data
    fetch('/api',{
        method:'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body:JSON.stringify({
            name: document.getElementById("feedback-form-name").value,
            title: document.getElementById('feedback-form-title').value,
            message: document.getElementById('feedback-form-message').value
        })
    })
    .then(response=>response.json())
    .then(data=>{
    //redisplay messages when a new message has been submitted
    updateFeedback(data);
    })

})


const updateFeedback = (data) => {
    
    let output = "";
    data.forEach((item,key) =>{
    output += '     <div class="feedback-item item-list media-list">';
    output += '       <div class="feedback-item media">';
    output += '       <div class="media-left"><button class="feedback-delete btn btn-xs btn-danger"><span id="' + key + '" class="glyphicon glyphicon-remove"></span></button></div>';
    output += '         <div class="feedback-info media-body">';
    output += '           <div class="feedback-head">';
    output += '             <div class="feedback-title">' + item.title + ' <small class="feedback-name label label-info">' + item.name + '</small></div>';
    output += '           </div>';
    output += '           <div class="feedback-message">' + item.message + '</div>';
    output += '         </div>'; 
    output += '       </div>';
    output += '     </div>';

    })
    let feedbackMessages = document.querySelector('.feedback-messages');
    feedbackMessages.innerHTML = output;
}



