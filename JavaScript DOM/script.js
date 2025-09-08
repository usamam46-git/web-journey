// let paragraph=document.getElementById("paragraph");
// let childnodes=paragraph.childNodes;
// // console.log(childnodes.length);
// paragraph.appendChild(document.createElement("div"));
// console.log(childnodes.length);

let h2= document.createElement("h2");
h2.innerText="Hello Javascript";
document.body.appendChild(h2);
h2.innerText += " from Apna College Student!"

let boxes=document.querySelectorAll(".box");
console.log(boxes);
// document.body.appendChild(boxes);
// boxes.innerText="Usama";
boxes[0].innerText="Hello World";
boxes[1].innerText="Hello Usama";
boxes[2].innerText="Hello Sana";

console.log(boxes.getAttribute("id"));

let newbtn= document.createElement("button");
// console.log(newbtn);
newbtn.innerText="Click me";
newbtn.style.backgroundColor="navy";
newbtn.style.color="white";
newbtn.style.padding="10px";
newbtn.style.borderRadius="5px";
document.body.prepend(newbtn);

let paragraph=document.querySelector(".paragraph");
paragraph.classList.add("para");
console.log(paragraph.getAttribute("class"));
let newPara=document.getElementsByClassName("para");
// console.log(newPara);