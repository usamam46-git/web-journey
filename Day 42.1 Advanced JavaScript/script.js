//IIFE
// function sleep(){
//     return new Promise((resolve,reject) => {
//       setTimeout(() => {
//         console.log("Sleep Mode");
//         resolve("success");
//       }
//       ,5000)
//     }
//     )
// }

// (async () => {
//     await sleep();
//     await sleep();
// })();

//Re-Structuring

// let [x,y]=[7,20];
// console.log(x,y);

// let [x,y, ...rest]=[7,20,3,4,5,67,4];
// console.log(x,y,rest);

//This will be used when we have a big object and we have to extract two or three keys out of it
// let obj={
//   a:1,
//   b:2,
//   c:3
// }
// let {a,b}=obj;
// console.log(a,b);

function sum(a,b,c){
  return a+b+c;
}

let arr=[1,2,3];
console.log(sum(arr[0],arr[1],arr[2]));
console.log(sum(...arr));
// ...arr opens the array
//spread operator.

const arr2=[1,5,8];
const obj={...arr};
console.log(obj);

// var a1=6;
// console.log(a1);

// hoisting concept



