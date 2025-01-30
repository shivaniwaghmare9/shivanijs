


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


}
