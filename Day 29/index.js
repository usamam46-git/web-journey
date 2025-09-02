let numbers = [5, 8, 12, 3, 7, 10];
console.log(numbers);
function sum(a, b) {
    return a + b
}
console.log(numbers.reduce(sum));
let c = numbers.toString;
console.log(c);
for (let i = 0; i < numbers.length; i++) {
    console.log("Number:", numbers[i]);
}
let total = 0;
for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
}
console.log("Total:", total);

let largest = numbers[0];
for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] > largest) {
        largest = numbers[i];
    }
}
console.log(largest);

let evens=[];
for (let i = 0; i < numbers.length; i++) {
        if(numbers[i]%2===0){
            evens.push(numbers[i]);
        }
    
}
console.log(evens);
