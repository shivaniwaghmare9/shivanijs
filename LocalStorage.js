

let senddata=()=>{

    // let naame=document.querySelector("#inp").value
    // localStorage.setItem("Name",naame)

    localStorage.setItem("Name","shivani")
    localStorage.setItem("Age","23")
    localStorage.setItem("Course","CS")
    localStorage.setItem("Rollno","236")
}
let show=document.querySelector("#display")
show.innerHTML=localStorage.getItem("Name")


let out=()=>{

localStorage.removeItem("Name")
//localStorage.clear()      //all data clear
location.reload()
 

}