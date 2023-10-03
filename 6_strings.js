// Strings 


let fname = "Ajit ";
let lname ="pawar";

let fullname = fname+lname;  //concatination

console.log(fname.length);   // findes the length of the value stored in variable 
console.log(lname.length);
console.log(fullname.length)

console.log(fullname);

// String Methods 


let aname ="Ajit Pawar";
let bname = aname.toUpperCase();
console.log(bname);

let cname = aname.toLowerCase();
console.log(cname);

console.log(cname.indexOf("pawar"));

let newstr = "    aa  ";
console.log(newstr.trim());


console.log(newstr.toUpperCase().trim());   //method chaining 

// slice method
let slicestr = "my name is ajit and i love codeing";
console.log(slicestr.slice(5));

console.log(slicestr.slice(5,15));


// replace and repeat 

let replacestr = "apanaapana";
console.log(replacestr.replace("apana", "college"));

let fruite = "mango ";
console.log(fruite.repeat(3));