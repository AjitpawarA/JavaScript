// For Loop

let a =5;

for (let i=0; i<a; i++){
    console.log(i);
}

// odd numbers 

console.log("odd numbers from 1 to 15");

let b = 15;
for (let i=0; i<b; i++){
    if(i%2 != 0){
        console.log(i)
    }
}

// even nos 

console.log("Even numbers from 1 to 15");

let c = 15;
for (let i=0; i<c; i++){
    if(i%2 == 0){
        console.log(i)
    }
}


// multiplication table 

let mul=5;
console.log("Multiplication table of var mul");
for (let i=0; i<=10; i++){
    console.log((i)+"*"+(mul)+"="+(i*mul));
}

// loop with array
console.log("Accessing the array elements --")
let array=[10,[78,5,565,599,5],50,5,484,84,8,48];
for(let i=0; i<array.length;i++){
    console.log(array[i]);
}


// console.log("nested Array ")
// for(let p=0; p<array.length; p++){
//     for(let q=0; p<array[1].length; q++){
//         console.log(array[p][q]);
//     }
// }