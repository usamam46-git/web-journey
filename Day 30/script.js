// function days() {
//     let input = document.getElementById("numberDay").value;
//     let output = document.getElementById("output");
//     if (input == 1) {
//         output.innerText = "Monday"
//     }
//     else if (input == 2) {
//         output.innerText = "Tuesday"
//     }
//     else if (input == 3) {
//         output.innerText = "Wednesday"
//     }
//     else if (input == 4) {
//         output.innerText = "Thursday"
//     }
//     else if (input == 5) {
//         output.innerText = "Friday"
//     }
//     else if (input == 6) {
//         output.innerText = "Saturday"
//     }
//     else if (input == 7) {
//         output.innerText = "Sunday"
//     }
//     else {
//         output.innerText = "Invalid-Number."
//     }
// }
// function days() {
//     const input = +document.getElementById("numberDay").value;
//     const output = document.getElementById("output");
//     const week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

//     output.innerText = week[input - 1] || "Invalid-Number.";
// }
function days(){
    let input= +document.getElementById("numberMonth").value;
    let output= document.getElementById("output");
    let months=["January","February","March","April","May","June","July","August","September","October","November","December"]
    output.innerText= months[input-1]||"Invalid-Number";
}
// User enters a percentage number (0–100).

// If 90+ → A

// If 80–89 → B

// If 70–79 → C

// If 60–69 → D

// Below 60 → Fail

// 👉 Output should be the grade.

// function result() {
//     let input = +document.getElementById("percentage").value;
//     let output = document.getElementById("output");
//     if (input >= 90 && input <= 100) {
//         output.innerText = "A";
//     }
//     else if (input >= 80 && input <= 89) {
//         output.innerText = "B";
//     }
//     else if (input >= 70 && input <= 79) {
//         output.innerText = "C";
//     }
//     else if (input >= 60 && input <= 69) {
//         output.innerText = "D";
//     }
//     else if(input<60){
//         output.innerText ="Fail";
//     }
//     else{
//         output.innerText= "Invalid-Number";
//     }
// }
// let div = document.createElement("div");
// div.setAttribute("class", "inserted");
// div.innerHTML = "<b>I'm a new heading</b>";
// document.querySelector(".container").append(div);

