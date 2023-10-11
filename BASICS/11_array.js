

// Arrays

let names= ["ajity","nukul", "ritesh","sharan"];

// visualization

console.log(names[0]);
console.log(names[2]);
console.log(names[1]);
console.log(names[3]);

// mutable 

names[2]= "Nikhil";
console.log(names);

// Array methods

console.log("push operation ----")
names.push("Aditya");
names.push("Ram");
names.push("Sham");
console.log(names);

console.log("pop operation----- ")
names.pop();
names.pop();
console.log(names);

console.log("Unshift Operation -----");
names.unshift("Neha");
names.unshift("Amey");
names.unshift("Rocky");
console.log(names);


console.log("shift operation ");
names.shift();
names.shift();
console.log(names);



let nums = [10,20,30,40,50,60];
console.log(nums.indexOf(20));
console.log(nums.indexOf(60));

console.log(nums.includes(20));
console.log(nums.includes(800));


let a = [10,20,30,50,60];
let b = [45,65,9,98,84];

let c = a+b;
console.log(c);

let d = a.reverse();

console.log(d);

// sort
let e = b.sort();
console.log("e ----"+e);



console.log("Slice in arrays   ");
console.log(a.slice(4));
console.log(a.slice(2,5));
console.log(a.slice(-2));    

// array refrence 

console.log("Array Refrences ----");
let p =[];
let q =[];

let r=[12];
let s=[15];

console.log(p==q);
console.log(p===q);

console.log(r==s);
console.log(r===s);



// Neasted array 
console.log("----Nested array----")
let nested = [[10,20],[51,74,6,2],[71,32,6,500]];
console.log(nested[2]);
console.log(nested[2,[1]]);