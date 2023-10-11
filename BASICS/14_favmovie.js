

// Guess the favourite movie 


let favmovie = "Avatar";

let guess=prompt("Guess the favourite movie ");

while(favmovie!=guess){
    if(guess==favmovie){
        console.log("Congrats...")
        break;
    }
    else if(guess=="quite"){
        break;
    }
    else{
        console.log("Wrong Guess;")
    }
};