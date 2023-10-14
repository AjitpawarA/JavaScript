

let p = document.querySelector("p");
let stop = document.querySelector("button");

let changetext = function(){
    p.innerHTML="Apana College";
}

let change =setTimeout(changetext,2000);

stop.addEventListener("click", function(){
    console.log("Stopped")
    clearTimeout(change);
})
