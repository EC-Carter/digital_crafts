
const socket = io();

//username and message input fields
let chatUserName = document.querySelector('#chat-username');
let chatMessage = document.querySelector('#chat-message');

    //emmit a message
    //look for form and add an event listener
    let chatForm = document.querySelector('form');
    chatForm.addEventListener('submit',(e)=>{
        e.preventDefault();
        socket.emit('postMessage',{
            username: chatUserName.value,
            message: chatMessage.value 
        })
    })//eo event listener

    //listen for incoming messages
    socket.on('updateMessage',(data) => {
        let chatDisplay = document.querySelector('.chat-display');
        let newMessage = document.createElement('p')

        if(chatUserName.value === data.username){
            newMessage.className = "bg-success chat-text";
        } else{
            newMessage.className = "bg-info text-warning chat-text"
        }
        newMessage.innerHTML = `<strong>${data.username}</strong>:${data.message}`;
        //chatDisplay.append(newMessage);
        chatDisplay.insertBefore(newMessage, chatDisplay.firstChild);

        
    })
