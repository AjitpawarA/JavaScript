

let buttons= document.querySelectorAll(".button");
let body =document.querySelector(".main");

buttons.forEach(function(button){
    button.addEventListener("click", function(e){
        if(e.target.id ==="gray"){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id ==="red"){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id ==="orange"){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id ==="yellow"){
            body.style.backgroundColor=e.target.id;
        }
    })
})