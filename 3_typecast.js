

// Type Cast in js 

// string to number 
let a = "150";
let b = parseInt(a);
console.log(a)
console.log("type of a = "+typeof a);
console.log(b)
console.log("type of a = "+typeof b);


// number to string
let x = 150;
let y = String(a);
console.log(x)
console.log("type of x = "+typeof x);
console.log(y)
console.log("type of y = "+typeof y);


// boolean to string

let boolval = true;
let strval = String(boolval);
console.log(boolval)
console.log("type of boolval = "+typeof boolval);
console.log(strval)
console.log("type of strval = "+typeof strval);


// Number to boolean 
let num = 1;
let bool = Boolean(num);
console.log(num)
console.log("type of num = "+typeof num);
console.log(bool)
console.log("type of bool = "+typeof bool);


// date to string 
let date = new Date();
let strdate = date.toString(); 
console.log(strdate)




// Non premitive 

// objects
// functions


// object 

let myobj={
    fname : "Ajit",
    lname : "Pawar",
    age : 65
}

console.log(myobj.fname);





// functions 

let myfun = function(){      // this is a function
    console.log("this is a function")
}
myfun();  // this is a function call 