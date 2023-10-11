let started = false;
let level =0;

let userseq =[];
let gameseq=[];


let btns = ["yellow", "green", "blue", "red"];

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started==false){
        console.log("game started");
        started=true;

        levelup();
    }

});

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function()  {
        btn.classList.remove("flash");
    }, 100);
}

// function falseflash(){
//     document.body.classList.add("flashfalse");
//     setTimeout(function()  {
//         document.body.classList.remove("flashfalse");
//     }, 100);
// }

function levelup(){
    level++;
    h2.innerText=`level - ${level}`


    // random button choose 

    let randind = Math.floor(Math.random()*3);
    let randcolor = btns[randind];
    let randbtn = document.querySelector(`.${randcolor}`)
    gameseq.push(randcolor);
    console.log(gameseq);
    btnflash(randbtn);

}


function checkans(){
    let index = level-1;
    if(userseq[index]==gameseq[index]){
        console.log("same value")
    }
    else{
        h2.innerText=`level - press any key to start`
        // falseflash();
    }
}


function btnpress(){
    let btn = this;
    btnflash(btn);
    let usercolor = btn.getAttribute("id");
    userseq.push(usercolor);
    console.log(usercolor);

    checkans();
}

let allbtns = document.querySelectorAll(".box");

for(btnone of allbtns){
    btnone.addEventListener("click", btnpress);
}