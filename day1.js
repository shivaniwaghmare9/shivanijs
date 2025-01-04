//function siv(){
  //  console.log("hello world")

//}
//function abc(){
  //  console.log("world")
//}
//siv();//call
//abc();//call
//type coercion
// string has highest priority

function go(){
    var a="shiavni";
    var b=4;
    console.log(a+b);

}
//number has highest priority
function go(){
    var a=5;
    var b=undefined;//NAN NOT A NUMBER
    console.log(a+b);

}
function go(){
    var a=5;
    var b=true;// 6
    console.log(a+b);

}
function go(){
    var a=5;
    var b=null;// null
    console.log(a+b);

}
function go(){
    var a=5;
    var b=false;//  5
    console.log(a+b);

}
function go(){
    var a=null;
    var b=undefined;//NAN NOT A NUMBER
    console.log(a+b);

}




