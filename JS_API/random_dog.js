

let btn = document.querySelector("button");

let url ='https://dog.ceo/api/breeds/image/random';

let img=document.querySelector('img')
async function randomdog(){
    let res = await fetch(url);
    let data = await res.json();
    console.log(data.message)
    img.setAttribute('src',data.message)

}

btn.addEventListener("click",async ()=>{
    randomdog();
});