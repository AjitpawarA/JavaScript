//Functions in java 

 function saymyname(){
    console.log("Ajit");
 }

 saymyname();
 saymyname();


 function addition(num1, num2){
    console.log("Addition = "+ (num1+num2));
 }

addition(10,20);



function substraction(no1,no2){
    let result = no1-no2;
    return result;
}
console.log(substraction(30,20));


let result = substraction(30,20);
console.log("Result = "+ result);



// Accessing multiple parameters in function
console.log("Accessing multiple parameters in function");
function calculatesum(...nums){
   return nums;
}
console.log(calculatesum(100,200,5,4,5));




// Passing object in the function

console.log("Passing object in the function");
let myobject={
   username:"Ajit Pawar",
   age:21,
   loggedin:true
}

function handleobj(anyobj){
   console.log(`my name is : ${anyobj.username} and the age : ${anyobj.age}`);
}

handleobj(myobject);



// Passing Array as parameter in function
console.log("Passing Array as parameter in function");
let array1 =[10,20,30,4,5,6];

function handlearray(anyarray){
   console.log(anyarray[0]);
   console.log(anyarray[2]);
}

handlearray(array1);