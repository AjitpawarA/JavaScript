const inputvalue= document.getElementById("inptask");
const taskssul = document.getElementById("taskssul");


function addelement(){
    
    const tasktext = inputvalue.value;
    if(tasktext==""){
        alert("please enter some value");
    }
    var newtask = document.createElement("li")
    newtask.id="newli";
    newtask.innerHTML=tasktext;
    taskssul.appendChild(newtask);
    inputvalue.value="";


    var deletbutton = document.createElement("button");
    deletbutton.innerHTML="X";
    newtask.appendChild(deletbutton);
    deletbutton.id="deletbtn";

    deletbutton.addEventListener("click", ()=>{
        newtask.remove();
    })
   
}