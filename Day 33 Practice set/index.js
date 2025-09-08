// function evenorodd(num){
//     if(num%2===0){
//         console.log("This is an even number.")
//     }
//     else{
//         console.log("This is an odd number.")
//     }
// }

// evenorodd(333);

// function factorial(num){
//     let mul=1
//     for (let i = 1; i <= num; i++) {
//       mul= mul*i
//     }
//     console.log(mul);
// }

// factorial(8);

// function largest(arr){
//     let largest=arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if(largest>arr[i]){
//             largest=arr[i];
//         }
//          console.log(largest);
//     }

// }
// largest[2,3,4,5,6,7];

// function palindrome(str){

// }

// function vowels(str){
//     let count=0
//     for (const element of str) {
//         if(element==="a"||element==="e"||element==="i"||element==="o"||element==="u")
//             count++
//     }
//     console.log(count);
// }

// vowels("usamaaaaa");

// const vowels= (str) => {
// let count=0
//     for (const element of str) {
//         if(element==="a"||element==="e"||element==="i"||element==="o"||element==="u")
//             count++
//     }
//     console.log(count);

// }
// vowels("usamamamaaaaa");

// function capitalize(str){
//   const cap= str.toUpperCase().charAt(0) + str.slice(1);
//   console.log(cap);

// }

// capitalize("usama is a good guy");

function reverse(str){
    let rev="";
    for (let i = str.length - 1; i >= 0; i--) {
        rev += str[i];
    }
    console.log(rev);
}
reverse("usama is a good guy");

// function palindrome(str){
//     let rev="";
//     for (let i = str.length-1; i >=  0; i--) {
//       rev+= str[i];
//     }
//     // for (const element of str) {

//     //     }
//         if(rev===str){
//             console.log("Yes its a palindrome");
//     }
//     else{
//         console.log("No this isn't a palindrome.");
//     }

// }
// palindrome("abba");

// for (let i = 1; i <= 50; i++) {
//    if(i%2===0){
//     console.log(i);
//    }

// }

// function duplicates(arr){
//   return[...newSet(arr)];
// }

// console.log(duplicates([1,2,3,4,5,3,2,1]));

// function areAnagrams(str1, str2) {
//   let format = str => str.toLowerCase().split("").sort().join("");
//    if(format(str1) === format(str2)){
//     console.log("Yes these are anagrams!")
//    }
//    else{console.log("No these are not anagrams!")}
// }
// console.log(areAnagrams("listen", "silent")); // true

// areAnagrams("sana","nasa");

// function starPattern(rows) {
//   for (let i = 1; i <= rows; i++) {
//     console.log("*".repeat(i));
//   }
// }
// starPattern(10);

// let fruits=["apple","banana","cherry"];
// let fruit= fruits.toString();
// console.log(Array.from(fruit.toUpperCase().split()));

// function givemeobj(object){
//     for (const key in object) {
//             const element = `${key} + ${object[key]}`;
//             console.log(element);  
//     }
    
// }
// givemeobj(obj={
//     "name":"Usama",
//     "Gender":"Male"
// })

// let arr=[5,12,18,7,3,25];
// let count=0
// arr.forEach((value) => {
//     if(value>10){
//         count++
//     }
// }
// )
// console.log(count);

// let arr = ["Hello", " ", "World", "!"];
// let newarr = [];
// arr.forEach((value) => {
//   newarr.push(value);
// });
// console.log(newarr);

// let arr=[3,4,5,6,7,3,2,4,6];
// const output=arr.reduce((a,b) => {
//     return a*b;
// }
// )
// console.log(output);





// let newarr=arr.filter((value) => {
//   return value%2===0;
// }
// )
// console.log(newarr);

// let marks=[82,50,95,94,96,89];
// const output=marks.filter((value) => {
//     return value>90;
  
// }
// )
// console.log(output);
// let sum=0
// for (let i = 0; i <=10; i++) {
//    sum=sum+i;
//    Array.from(sum);
//    console.log(Array.from(sum));
    
// }
// console.log(sum);