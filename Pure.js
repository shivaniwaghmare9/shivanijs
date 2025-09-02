

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


// let inpbox=document.querySelector("#inpbox")
// inpbox.addEventListener("input",()=>{
//     console.log(inpbox.value);
// })

// let show=document.querySelector("#input")
// let dispaly=document.querySelector("#button")
// show.addEventListener("keydown",(e)=>{
//     dispaly.innerHTML=(e.key)

// })
let show=document.querySelector("#input")
let dispaly=document.querySelector("#button")
show.addEventListener("input",()=>{
    dispaly.innerHTML=(show.value)

})