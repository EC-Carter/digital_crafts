

class CustomAlert {
    constructor(){
        this.render(dialog){
            let winW = window.innerWidth;
            let winH = window.innerHeight;
            //let dialogOverlay = document.getElementById("dialogOverlay");
            let dialogOverlay = document.createElement("div");
            dialogOverlay.setAttribute("id","dialogOverlay");
            body.append(dialogOverlay);
            // let dialogBox = document.getElementById("dialogBox");
            let dialogBox = document.createElement("div");
            dialogBox.setAttribute("id","dialogBox");
            body.append(dialogBox);
            let innerDialogDiv = document.createElement("div");
            innerDialogDiv.setAttribute("id","innerDialogDiv");
            dialogBox.append(innerDialogDiv);

            dialogOverlay.style.display = "block";
            dialogOverlay.style.height = winH+"px";
            dialogBox.style.display = "block";
            dialogBox.style.left = "25%";
            dialogBox.style.top = "30%";
            
            let dialogHead = document.createElement("div");
            innerDialogDiv.append(dialogHead);
            let dialogBody = document.createElement("div");
            innerDialogDiv.append(dialogBody);
            let dialogFoot = document.createElement("div");
            innerDialogDiv.append(dialogFoot);
            dialogHead.innerHTML = "";
            dialogBody.innerText = dialog;
            dialogFoot.innerHTML = "<button id='closeButton'>Close</button>";
            let button =  document.getElementById("closeButton");
            
            button.addEventListener("click",()=>{
              //document.getElementById("dialogBox").style.display = "none";
            dialogBox.style.display = "none";
              //document.getElementById("dialogOverlay").style.display = "none";
            dialogOverlay.style.display = "none";
            } )
        }
    }
}