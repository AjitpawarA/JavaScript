



let background = document.querySelector(".main");


const randomcolor = function(){  
    let color = "#";
    const hex = "0123456789ABCDEF";
    for(let i=0; i<6; i++){
        color+=hex[Math.floor(Math.random()*16)];
    }
    return color;
};

let intervalid;

const startChangingcolor = function(){
    intervalid =setInterval(chanbgcolor,1000);

    function chanbgcolor(){
        background.style.backgroundColor = randomcolor();
        let colorcode = document.querySelector("h5");
        
        colorcode.innerHTML=randomcolor();
    }
}

const stopChangingcolor = function(){
    clearInterval(intervalid);
}

document.querySelector("#start").addEventListener("click",startChangingcolor);
document.querySelector("#stop").addEventListener("click",stopChangingcolor);

// console.log(colorchange());
