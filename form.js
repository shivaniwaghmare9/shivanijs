


let sub=()=>{


    let inpname=document.querySelector("#name").value
    let inpnum=document.querySelector("#num").value
    let inpmail=document.querySelector("#mail").value
    let inppass=document.querySelector("#pass").value
    let inpcpass=document.querySelector("#cpass").value
    


    
    let errname=document.querySelector("#errorname")
    let errnum=document.querySelector("#errornum")
    let errmail=document.querySelector("#errormail")
    let errpass=document.querySelector("#errorpass")
    let errcpass=document.querySelector("#errorcpass")


    if(inpname==""){
        errname.innerHTML="Please enter the name"
        errname.style.color="red"
        return false;
    }
    if(inpnum==""){
        errnum.innerHTML="Please enter the number"
        errnum.style.color="red"
        return false;
    }
    if(inpmail==""){
        errmail.innerHTML="Please enter the email"
        errmail.style.color="red"
        return false;
    }
    if(inppass==""){
        errpass.innerHTML="Please enter the password"
        errpass.style.color="red"
        return false;
    }
    if(inpcpass==""){
        errcpass.innerHTML="Please enter the confirmpass"
        errcpass.style.color="red"
        return false;
    }

    /*if(inppass==inpcpass){
        return true;
    }
    else{
       errcpass.innerHTML="password does not match please enter the correct password"
        errcpass.style.color="brown"
        
        return false;
    }
*///or
if(inppass!==inpcpass){
    errcpass.innerHTML="password does not match please enter the correct password"
        errcpass.style.color="brown"
        
        return false;
}
else if(isNaN(inpnum)){       //if number then ans will be false
    errnum.innerHTML="Please enter only number"
        errnum.style.color="red"
        return false;
}
else if(inpnum.length!==10){
    errnum.innerHTML="Please enter 10 digit"
     errnum.style.color="red"
    return false;
}
//=============================string method(includes)===============================
else if(!(inpmail.includes('@')&& inpmail.includes(".com"))){
    errmail.innerHTML="please enter valid email"
    errmail.style.color="red"
    return false;
}
else if(!(inppass.match([/ 1234567890/]) && inppass.match([/ @!#$%^&*/]) && inppass.match([/ a-z/]))){
    errpass.innerHTML="please enter strong password write dots symbols numbers"
     errmail.style.color="red"
    return false;
}
else if(inppass.length!==10){
    errpass.innerHTML="Please enter 10 digit"
     errpass.style.color="red"
    return false;
}


}
