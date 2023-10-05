// For each 

let array =[10,15,84,47,45,15];

for (const a of array){
    // wil  return actual elemnts in the array
    console.log("each element in array is :"+ a);
}


for (const a in array){
    // will return indexes of the array 
    console.log("each element in array is :"+ a);
}


let greeting = "Happy B-Day";
// will trace through the variable and return each word one by one 
for (const a of greeting){
    console.log("each elemnt of the variable is:"+ a);
}


// Map function 

let array1=[10,20,3,4,5,8,7];

let b = array1.map((value)=>{
    return value;
});

console.log("array element using map function are :"+b);



// Filter Function
// In filter method we can apply a condition and it will travers through the array of variable 
// and it will return the elements satisfying the condition
let array2 =[4,5,7,8,9,6,2,1,3];
let c = array2.filter((value)=>{
    return value>3;
})
console.log("array elemnts using filter function :"+ c);





