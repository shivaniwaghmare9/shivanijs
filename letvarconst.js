




function go(){
  //===============Redeclaration============
//{var supported   let &const not supported}
   // var a=25;
   // var a=28; ///supported
   // console.log(a);


//function go(){
  // let a=25;
    ///let a=28;  //not supported
    //console.log(a);
//}
//go();
//function go(){
  //  const a=25;   //not supported
   // const a=28;
  //  console.log(a);
//}
//go();
//================Reassigment=================
//{var & let  supported   const not supported}

  //var a=9;
   // a =10;   //SUPPORTED
   // console.log(a);


   // let a=9;
   // a =10;   //SUPPORTED
   // console.log(a);


   // const a=9;
  //  a =10;   // not SUPPORTED
    //console.log(a);


    ///=====================SCOPE=====================
     //var a=45;
     //console.log(a)
    // {          
     // var a=47;       ///output 5,7
     // console.log(a)
    // }


    // var a=45;
    
    // {          
    //  var a=47;       ///output 7
     //console.log(a)
     //}

     //===================HOISTING==============
     //{supported in var == not-supported in let & const}

     console.log(a);  
     var a=6;
     var a=7;
   
     
}
go();
