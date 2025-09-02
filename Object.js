

let obj1={
    name:"shivani",
    age:20,
    city:"bhopal",         //same key lene prr value likhne prr dusri value dikhayege
    age:22 ,                  // last me(,) nhii lagana hota h 
    Fruits:["apple","orange","mango"],  
    section:'d',
    institute:"cybrom",
    course:"Full Stack Devlopment",
    cybrom:function(){
        console.log(`Hello ${this.name} and your age is ${this.age}`);
    },
    world:function(){
           console.log(`Hello i am ${this.name} I am  a student of ${this.institute} in ${this.course} of section ${this.section}`)
    }
}
obj1.world()
obj1.cybrom()
 obj1.capital="new delhi",
console.log(obj1.Fruits[1]);   //to the access orange
 console.log(obj1);               //to see full object
 console.log(obj1.name)            // object access
obj1.email="shivaniw69@gmail.com"    //inserting the data
obj1.age=23                     //update key ,new value
 delete obj1.city                     //delete krne ke liye delete keyword likhna hota h//
console.log(obj1);      //to see full object

//=================destructuring==========================================================================================
let student={
    name:"shivani",
    age:23,
    city:"bhopal",
   
}
let {name,age,city}=student
console.log(age);

//============================spreadoperator========================================================================================
let spd1={
    name:"shivani",
    age:23,
    city:"bhopal",
}
let spd2={
   roll:123,
   marks:75,
   board:"bhopal"
}
let spd4={
    capital:"delhi",
    section:'d'
}
let combinedspd3={...spd1,...spd2,...spd4};
console.log(combinedspd3);


///////////////combined of array==========================
let arr1={
    arr:["shivani",234]
        
}
let arr2={
    arr4:["ram"]
}
let combinedarr3={...arr1,...arr2};
console.log(combinedarr3);

//=================NORMAL FUNCTON========================
function come(){
    let a="shivani";
    console.log(a);
}
come();

//=====================ANONYMUS============================
let go=function(){
    console.log("anonymus");
}
go();





//==============================IIFE=========================
(
    function(){
        console.log("IIFE");
    }
)()
//===================================ARROW FUNCTION(=>)=======================//special type of anonymos function
let gos=()=>{
    console.log("arrow");
}
gos()                                                                                                                                              