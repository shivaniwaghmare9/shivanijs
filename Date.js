


// //console.log(new Date());

// let time=new  Date()
//  console.log(time.toLocaleString());  //readable

// console.log(time.getFullYear());  //year 2025
// console.log(time.getMonth());
// console.log(time.getDay());
// console.log(time.getMinutes());
// console.log(time.getSeconds());
// console.log(time.getMilliseconds());
// console.log(time.getHours());


 
// let a=["sunday","monday","tuesday","wednusday","thursday","friday","saturday"]
// console.log(a[time.getDay()])


// let shiv=()=>{

//  let change=  document.querySelector("#btn")
//  let a=["sunday","monday","tuesday","wednusday","thursday","friday","saturday"]
// change.innerHTML=a[time.getDay()]

// }



// let ram=()=>{
//      let show=document.querySelector("#btn1")
//      let display=document.querySelector("#inp").value;
//      let current=new Date();
//      let age=current.getFullYear() - display;
//      show.innerHTML=`you are ${age} years old`;

// }

// let shiv=()=>{
//      let show=document.querySelector("#btn2")
//      let display=new Date();
//      show.innerHTML=display.toLocaleTimeString()
// }
   //setInterval(time,1000)  OR

// setInterval(()=>{
//       let show=document.querySelector("#btn2")
//      let display=new Date();
//      show.innerHTML=display.toLocaleTimeString()
// },1000)

let time=()=>{
     let ring=document.querySelector("#alm")
     let display=document.querySelector("#inp").value
     let current=new Date();
     let time=current.toLocaleTimeString()
     ring.innerHTML=`alarm is ringing ${display}`;
}
