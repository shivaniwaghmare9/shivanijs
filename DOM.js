//function shiv(){
   // document.getElementById("")
   // document.getElementsByClassName("")
  //  document.querySelector("")
    //let para=document.querySelector("#new")
    //para.innerHTML="HELLO I AM DEVELOPER"


//}
   /*function textchange(){
    let change= document.querySelector("#box")
    change.innerHTML="<h1>Hello Cybrom</h1>"  
    change.style.color="red"
    change.style.backgroundColor="orange"
    document.body.style.backgroundColor="gray"
    
   }
   function shiv(){
    let change= document.querySelector("#box")
    change.innerHTML="<h1>Hello Cybrom</h1>"  
    change.style.color="red"
    change.style.backgroundColor="green" 
    
   }
   function ram(){
    document.body.style.backgroundColor="white"
   }*/
  function ram() {
   let change=  document.querySelector("#new")
   change.addEventListener('click',()=>{
      if(change.style.display==='none'){
         change.style.display='block';
      }
      else{
         change.style.display='none';
      }
   })
  }