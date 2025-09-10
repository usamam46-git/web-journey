let i;
let j;
let output = document.getElementById("output");
 for(i = 2; i <= 5; i++){ // outer loop
    for(j = 1; j <= 10; j++){ // inner loop
        const result =  // 2 x 2 = 4
        `${i} x ${j} = ${i*j} `;
        // console.log(result);
        output.innerHTML += `${result} <br>`;
    }
    output.innerHTML += `<hr>`
 }