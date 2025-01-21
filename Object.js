

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
console.log(obj1.Fruits[1]);   //to the access orange
 console.log(obj1);               //to see full object
 console.log(obj1.name)            // object access
obj1.email="shivaniw69@gmail.com"    //inserting the data
obj1.age=23                     //update key ,new value
 delete obj1.city                     //delete krne ke liye delete keyword likhna hota h//
console.log(obj1);      //to see full object