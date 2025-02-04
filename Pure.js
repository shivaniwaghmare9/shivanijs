

// let clickme=document.querySelector("#btn")

// clickme.addEventListener("click",()=>{  ///ek bar click larne prr
//     alert("Hello")
// })


// let clc=document.querySelector("#btn2")
// let clickm=document.querySelector("#btn1")
// clc.addEventListener("dblclick",()=>{  ///dblclick karne prr 
//     clickm.style.backgroundColor="blue"
// })



// let inpbox=document.querySelector("#inpbox")
//  inpbox.addEventListener("keydown",(e)=>{
//      console.log(e.key);
// })


// let inpbox1=document.querySelector("#inpbox")
// inpbox1.addEventListener("input",()=>{
//     console.log(inpbox1.Value)
// })

let show=document.querySelector("#input")
let dispaly=document.querySelector("#button")
show.addEventListener("keydown",(e)=>{
    dispaly.innerHTML=(e.key)

})