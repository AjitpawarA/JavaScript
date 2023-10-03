//objects in js

let myobj ={
    name:"Ajit",
    "Full name " :"Ajit Chandrakant Pawar",
    age : 18,
    email:"pawarac18@gmail.com",
    loggedin:["mon","tue","wed","thu","fri"]
}


console.log(myobj.name);
console.log(myobj["Full name "]);
console.log(myobj.age);


myobj.age=21;
myobj.name="Nikhil";

Object.freeze(myobj);
console.log(myobj.name)
myobj.name="Ram";
console.log(myobj.name);




// Singleton Objects 

let instauser=new Object();

console.log(instauser);

instauser.id="1243as";
instauser.name="Ajit";
instauser.fullname={
    fname:"Ram",
    laname:"Shinde"
}

console.log(instauser)



//  Destructuring the object in js 

const Courses={
    coursename:'JS in Hindi',
    price:999,
    Teacher:"Nikhil",
}

const {Teacher} = Courses;
console.log(Teacher);

const {coursename : cn} = Courses;
console.log(cn);