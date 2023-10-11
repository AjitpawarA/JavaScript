// hiigher order function

let greet = function(){
    console.log("Happy B-Day");
}

function multigreet(func, count){
    for(let i=0; i<count; i++){
        func();
    }
}

multigreet(greet,4);
