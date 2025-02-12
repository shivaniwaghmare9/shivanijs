


//console.log(new Date());

let time=new  Date()
 console.log(time.toLocaleString());  //readable

console.log(time.getFullYear());  //year 2025
console.log(time.getMonth());
console.log(time.getDay());
console.log(time.getMinutes());
console.log(time.getSeconds());
console.log(time.getMilliseconds());
console.log(time.getHours());


 
let a=["sunday","monday","tuesday","wednusday","thursday","friday","saturday"]
console.log(a[time.getDay()])


let shiv=()=>{

 let change=  document.querySelector("#btn")
 let a=["sunday","monday","tuesday","wednusday","thursday","friday","saturday"]
change.innerHTML=a[time.getDay()]

}
