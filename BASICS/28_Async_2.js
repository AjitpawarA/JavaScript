
let h3 = document.querySelector("h3")




let currtime = setInterval(function(){
    const date = new Date();
    h3.innerHTML=(date.toLocaleTimeString());
},1000)

let stop = document.querySelector("button");

stop.addEventListener("click", function(){
    clearInterval(currtime);
    console.log(h3.innerHTML);
    let h5 = document.querySelector("h5");
    h5.innerHTML=h3.innerHTML;
})
