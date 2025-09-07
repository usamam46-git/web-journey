// for (let i = 0; i < 5; i++) {
//     console.log("Hello!");
// }
// let a=[3,4,3,6,7,9];
// for (let i = 0; i < a.length; i++) {
//     const element = a[i];
//     console.log(element);
// }

// let sum= 0;
// for (let i = 0; i <=100; i++) {
//     sum=sum+i; 
// }
// console.log(sum);

// let sub=0;
// for (let i = 0; i > 10; i--) {
//    sub=i-sub

// }
// console.log(sub);
// let i=0
// while (i<=100) { 
//     console.log(i);
//     i++;
// }
// let a="Usama";
// let size=0;
// for (const val of a) {
//     console.log(val);
//     size++;
// }
// console.log("Size= ", size)
// let obj={
//     "Name":"Usama",
//     "color":"Blue"
// }
// for (const key in obj) {
// console.log(key, obj[key]);     
//     }

// for (let i = 0; i<=100; i++) {
//   if (i%2===0){console.log(i)}

// }

// let num=5;
// for (let i = 1 ; i <=10; i++) {
//    console.log("5 x",i,"=", num*i);
// }

// for (let i = 1; i <=50; i++) {
//     // const element = array[i];
//    if(i%3===0&&i%5===0){
//    console.log("FizzBuzz");
//    }
//    else if (i%3===0){
//     console.log("Fizz")
//    } 
//    else if(i%5===0){
//     console.log("Buzz");
//    }
//    else{console.log(i)};

// }
// ?

// let arr=[3,5,6,7,8,3,2,1];
// for (let i = 0; i < arr.length; i++) {
//    console.log(arr[i]);

// }
// for (const el of arr) {
//     console.log(el);
// }
// let marks=[97,43,85,80,75];
// let sum=0
// for (const val of marks) {
//     sum= val+sum
// }
// console.log(sum);
// let average= sum/marks.length;
// console.log(average);

// let arr=[240,300,650,400,700];
// let discountedPrice=[];
// for (let i = 0; i < arr.length; i++) {
//    const price= arr[i]-(arr[i]*10/100);
// //    console.log(price);
// discountedPrice.push(price);

// }
// console.log(discountedPrice);
// let companies=["Uber","Boomberg","Netflix","Amazon","Ola"];
// companies.push("Careem");
// console.log(companies);

// const arrowSum= (a,b) => {
//   console.log (a+b)
// }
// arrowSum(4,4);


// function vowels(str) {
//    let count=0
//    for (const element of str) {
//       if (element === "a" || element === "e" || element === "i" || element === "o" || element === "u"){
//       count++;
//       }
//       // console.log(element);
//    }
//    return console.log(count);
// }
// vowels("usama");

// let vowelsCount= (str) => {
//    let count=0
//    for (const element of str) {
//       if (element === "a" || element === "e" || element === "i" || element === "o" || element === "u"){
//       count++;
//       }
//    }
//    return count;
// }
// console.log(vowelsCount("usama"));

// let numbers=[3,5,6,8,9,5,4];
// numbers.forEach((value) => {
//     console.log(value**2);
  
// }
// )

let arr =[1,2,3,4,5,6];
let newarr= arr.map((value) => {
    return value;
   
}

)
const sum= (a,b) => {
  return a+b;
}

 console.log(newarr.reduce(sum));
