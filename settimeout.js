

//=================================================SETTIMEOUT=============================================
 setTimeout(()=>{
    console.log("Running.....");
 },3000)

console.log("In proccess");


let shiv=()=>{
let show=document.querySelector("#bt1")
setTimeout(()=>{
show.innerHTML="shivani"
},3000)
}

//===============================SETINTERVAL===============================================

setInterval(()=>{
    console.log("Running.....");
},2000)


//=========================================COUNT======================================
let count=0;
setInterval(()=>{
    console.log(count);                     //console prrr
    count++
},2000)

 let clear;
let counta=0;
let ram=()=>{
    let show=document.querySelector("#bt2")
  clear=setInterval(()=>{
    show.innerHTML=counta;                     //Page prr
    counta++
},2000)

}
 //=======================================CLEARHTML=========================================
let clr=()=>{
    clearInterval(clear)
}


//==================================question============================================

let stp;
let countb=0;
let shi=()=>{
    let output=document.querySelector("#btn")
    let input=document.querySelector("#inp").value
    if(input>=1){
         countb=input
         output.innerHTML=countb;
         stp=setInterval(()=>{
          countb--;
          output.innerHTML=countb;
          if(countb==1){
            clearInterval(stp);
          }
       },2000);
    }
}
