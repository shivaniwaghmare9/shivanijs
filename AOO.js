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
    //return e>5
   // return e%2!==0
    //return e%2==0;
    return e<5
  })
  console.log(ans1);

  //========================(FOR EACH)===================
  let c=[3,7,6,5,4,2]
  let ans2=c.filter((e)=>{
    console.log(e*2)
  })
