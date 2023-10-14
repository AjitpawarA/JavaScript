
let url ='https://catfact.ninja/fact';

async function getfacts(){
    try{
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.fact);
    }catch(err){
        console.log("An error Accured");
    }
    console.log("Bye Good Bye")
}

getfacts();