// this keyword

let students =[
    {
        sname:"shradha",
        age:21,
        phy:91,
        chem:93,
        math:81,
    
        getavg(){
            let avg=(this.phy+this.math+this.chem)/3;
            console.log("Marks of "+this.sname+" is :"+avg)
        }
    },{
        sname:"Abhay",
        age:21,
        phy:31,
        chem:93,
        math:81,
    
        getavg(){
            let avg=(this.phy+this.math+this.chem)/3;
            console.log("Marks of "+this.sname+" is :"+avg)
        }
    },{
        sname:"Amey",
        age:21,
        phy:91,
        chem:73,
        math:81,
    
        getavg(){
            let avg=(this.phy+this.math+this.chem)/3;
            console.log("Marks of "+this.sname+" is :"+avg)
        }
    },{
        sname:"Nikhil",
        age:21,
        phy:51,
        chem:63,
        math:41,
    
        getavg(){
            let avg=(this.phy+this.math+this.chem)/3;
            console.log("Marks of "+this.sname+" is :"+avg)
        }
    },{
        sname:"Ajit",
        age:21,
        phy:91,
        chem:73,
        math:81,
    
        getavg(){
            let avg=(this.phy+this.math+this.chem)/3;
            console.log("Marks of "+this.sname+" is :"+avg)
        }
    }
]


let marks = students.map((marks)=>{
    console.log(marks.getavg())
})