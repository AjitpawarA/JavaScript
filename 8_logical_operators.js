

// Logical Operators 


//       && --- logical AND
//       || --- logical OR
//       !  --- logical NOT


// used to check multiple conditions 

let age = 10;
if (age > 18 && age <25){
    console.log("this age is allowed");
}
else{
    console.log("this age group is not allowed..");
}



// logical OR ||
let age1 = 10;
if (age1 == 18 || age1 > 18){
    console.log("this age is allowed  adult");
}
else{
    console.log("this age group is not allowed  not adult..");
}


// logical NOT 
var x = 10;

if (!x) {
  console.log("x is falsey");
} else {
  console.log("x is truthy");
}