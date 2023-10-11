
// BMI = weight(kg's) / height * height(cms);

let weight=document.querySelector("#weight");
let height=document.querySelector("#height");
let calculate=document.querySelector("#calculate");
let result=document.querySelector("#result");

calculate.addEventListener("click", function(){
    let wt=weight.value;
    let hei= height.value;
    let heiinmeter=hei/100;
    let heimul=heiinmeter*heiinmeter;
    let calculation =Math.round( wt/heimul);
    result.innerHTML=(calculation);
    console.log(calculation)
})