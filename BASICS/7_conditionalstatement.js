

// Conditional statement in js 

// if statement 

let age = 44;
if(age >18){
    console.log("adult.......");
}


// if else statement 

let age1 = 15;
if(age1>18){
    console.log("adult");
}
else{
    console.log("not adult...")
}


// neasted if


let age2 = 44;
if (age > 18){
    console.log("Adult ");
    if (age2 < 60){
        console.log("age is not above 60")
    }
    else{
        console.log("age is above 60")
    }
}
else{
    console.log("this age group not allowed ...");
}
