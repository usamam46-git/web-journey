let output = document.getElementById("output");

function Add() {
  let input = document.getElementById("input").value;
  let color = document.getElementById("color").value;
  let div = document.createElement("div");
  let delBtn = document.createElement("button");

  // Style the div
  div.style.width = "200px";
  div.style.height = "200px";
  div.style.backgroundColor = color;
  div.style.margin = "10px";
  div.style.position = "relative";
  div.style.display = "flex";
  div.style.flexDirection = "column";
  div.style.alignItems = "center";
  div.style.justifyContent = "center";
  div.style.color = "#fff";
  div.innerText = input;

  // Create delete button
  delBtn.innerText = "Delete";
  delBtn.style.marginTop = "10px";

  // Correct way: use an arrow function to pass `div`
  delBtn.addEventListener("click", () => {
    output.removeChild(div);
  });

  div.appendChild(delBtn);
  output.appendChild(div);
}
