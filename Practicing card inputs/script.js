function generateCard() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let favColor = document.getElementById("bcolor").value;
    let tColor = document.getElementById("tcolor").value;

    let card = document.createElement("div");
    card.classList.add("card");
    card.style.backgroundColor = favColor;
    card.style.width = "300px";
    card.style.height = "200px";
    card.style.padding = "10px";
    card.style.color = tColor;
    card.style.margin = "10px";
    card.style.borderRadius = "10px";
    card.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";  

    card.innerHTML = `
      <h4>Name: ${name}</h4>
        <h3>Age: ${age}</h3>
        <h4>Favorite color: ${favColor}</h4>`

    let delbtn = document.createElement("button");
    delbtn.innerText = "Delete";
    delbtn.onclick = function () {
        card.remove();
    }

    card.appendChild(delbtn);

    document.querySelector(".container").appendChild(card);

    let nameInput = document.getElementById("name").value = "";
    let ageInput = document.getElementById("age").value = "";
    let bcolorInput = document.getElementById("bcolor").value = "";
    let tcolorInput = document.getElementById("tcolor").value = "";
}