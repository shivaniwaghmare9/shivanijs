//====================================ARRAY OF OBJECT======================================

//===============(MAP METHOD)============

   //let a=[3,7,6,5,4,2]
 //  let ans=a.map((e)=>{
   //  return e*2

  // })
 //  console.log(ans);
//===============OR==============
//-->  let a=[3,7,6,5,4,2]
  // let ans=a.map((e)=> e*2)
  // console.log(ans);


  //==============================(FILTER METHOD)=================
  let b=[3,7,6,5,4,2]
  let ans1=b.filter((e)=>{
    return e>5
   // return e%2!==0
    //return e%2==0;
    //return e<5
    
  })
  console.log(ans1);

  //========================(FOR EACH)===================
  let c=[3,7,6,5,4,2]
  let ans2=c.forEach((e)=>{
    console.log(e*2)
  })


  let aoo=[
    {
      name:"shivani",
      age:23,
      city:"bhopal"
    },{
      name:"shii",
      age:24,
      city:"indore"
    },{
      name:"shiv",
      age:25,
      city:"pune"
    }
  ]
  let show=document.querySelector("#box")

 /* let shiv=*/aoo.map((e)=>{
   // return e.age+e.name+e.city
     //return e.name
     //return e.city
     //return e
     //show.innerHTML+=`<h1>${e.name} ${e.age} ${e.city}</h1>`
    // show.innerHTML+=`<h1>${e.name}</h1>`
     //show.innerHTML+=`<h1>${e.age}</h1>`
     //show.innerHTML+=`<h1>${e.city}</h1>`
     show.innerHTML+=
     `
     <div>
     <h1 id="name">${e.name}</h1>
      <h1>${e.age}</h1>
       <h1>${e.city}</h1>
       </div>
     `
  })
  //console.log(shiv);