// function showResult() {
//     let englishMarks = document.getElementById("englishMarks").value;
//     let physicsMarks = document.getElementById("physicsMarks").value;
//     let chemistryMarks = document.getElementById("chemistryMarks").value;
//     let output = document.getElementById("output");
//     let average = ((parseInt(englishMarks) + parseInt(physicsMarks) + parseInt(chemistryMarks)) / 3)
//     output.innerText = "Average:" + average.toFixed(2);
//     // console.log(output.innerText);
// }

// function showItem() {
//     let val1 = document.getElementById("itemBox").value;
//     let val2= document.getElementById("itemBox").value;
//     let output = document.getElementById("output");
//     output.innerHTML= "Item: "+ val1;
// }
// 

let values = [];

function addValue() {
    let input = document.getElementById("myInput");
    let value = input.value;
    let output=document.getElementById("output")

        values.push(value);
        output.innerHTML = values.join("<br>");
        input.value = "";
    }
// function conversion(){
//     let f=document.getElementById("fahrenheit").value;
//     let output=document.getElementById("celcius");
//     let result= (f - 32)* 5/9;

//     output.value= result.toFixed(2);
// }

