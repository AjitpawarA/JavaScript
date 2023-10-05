

// Scope of Variables 


// global scope
let glo = 500;


if(true){
    // Local Scope 
    let a=10;
    var b =20;
    const c = 30;
    console.log(a);
    console.log(c);
    console.log(glo)
}

console.log(b);
console.log(glo)
