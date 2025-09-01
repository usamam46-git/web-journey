document.title= "Usama's Website";
// let boxes= document.getElementsByClassName("box");
// console.log(boxes);
// boxes[2].style.backgroundColor= "green";
// document.querySelector(".box").style.backgroundColor= "green";
// console.log(document.querySelectorAll(".box"));
document.querySelectorAll(".box").forEach (e=>{
    e.style.backgroundColor="green";
}
)
let c= document.getElementsByTagName(".div");
c[4].matches(".box"); 