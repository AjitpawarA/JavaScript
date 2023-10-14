

let generate = document.querySelector("#generatebtn");
let inputno = document.querySelector("#usernumber");
let check = document.querySelector("#checkbtn")
let comment = document.querySelector("#comment")
let correctans = document.querySelector("#correctans")

let userno = inputno.value;

let random = Math.round(Math.random()*100);
generate.addEventListener("click",function(){
    
    console.log(`random no - ${random}`)
});

check.addEventListener("click", function(){

        if(userno===random){
            correctans.innerHTML="WOOO....YOU WON";
        }
        else if(userno<random){
            comment.innerHTML="Your No is less than random No";
        }
        else{
            comment.innerHTML="Your No is Greater than random No";
        }
    
})