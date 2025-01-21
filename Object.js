

let obj1={
    name:"shivani",
    age:20,
    city:"bhopal",         //same key lene prr value likhne prr dusri value dikhayege
    age:22 ,                  // last me(,) nhii lagana hota h 
    Fruits:["apple","orange","mango"],  
    cybrom:function(){
        console.log(`Hello ${this.name} and your age is ${this.age}`);
    }
}
obj1.cybrom()
console.log(obj1.Fruits[1]);
 
obj1.email="shivaniw69@gmail.com"    //inserting the data
obj1.age=23                     //update key ,new value
 delete obj1.city                     //delete krne ke liye delete keyword likhna hota h//
console.log(obj1);      //to see full object