const factorial= (num) => {
    let mul=1;
    for (let i = 1; i<=num; i++) {
       mul=mul*i;
        
    }
    console.log(mul);
  
}
factorial(8);

let arr=[3,4,5,2,76,58];
let largest= arr[0];
for (let i = 0; i < arr.length; i++) {
   if(arr[i]>largest){
    largest=arr[i];
   }
}
 console.log(largest);

let str="Usama";
let rev= str.split("").reverse().join("").toLowerCase();
console.log(rev);