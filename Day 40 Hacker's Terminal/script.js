let btn = document.getElementById("btn");
let dots = 0;
let box = document.getElementById("box");



function hacking1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            box.innerText = "Initializing Hacking.....";
            resolve("success");
            console.log(resolve);
        }
            , 1500)
    }
    )
}
function hacking2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            box.innerText += "\n Reading your Files........";
            resolve("success");
        }
            , 2000)
    }
    )
}
function hacking3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            box.innerText += "\n Password files Detected....";
            resolve("success");
        }
            , 3000)
    }
    )
}
function hacking4() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            box.innerText += "\n Sending all passwords and personal files to server.....";
            resolve("success");
        }
            , 4000)
    }
    )
}
function hacking5() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            box.innerText += "\n Cleaning up......";
            resolve("success");
        }
            , 5000)
    }
    )
}


btn.addEventListener("click", async () => {
    await hacking1();
    await hacking2();
    await hacking3();
    await hacking4();
    await hacking5();
})
setInterval(() => {
    let last = document.body.getElementsByTagName("div");
    last = last[last.length - 1]
    if (last.innerHTML.endsWith("...")) {
        last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length - 3)
    }
    else {

        last.innerHTML = last.innerHTML + "."
    }
}, 100);

