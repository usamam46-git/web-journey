// console.log("one");
// console.log("two");
// console.log("three");

// const hello=() => {
//   console.log("hello");
// }

// setTimeout(hello,2000);
// setTimeout(() => {
//   console.log("Hello")
// },4000
// ) 

// function sum(a,b) {
//     console.log(a+b);
// }
// function calculator(a,b,sumCallback){
//      sumCallback(a,b);
// }

// console.log(1,2,sum);
function getData(dataId){
  return  new Promise((resolve,reject) => {
      setTimeout(() => {
        console.log("data",dataId);
        resolve("success")
      }
      ,4000
    );
  });
}
// console.log("Fetching data 1");

// getData(1).then((res) => {
//   console.log(res);
//   getData(2).then(() => {
//     console.log(res);
//   }
//   )

// }
// )
// or we can do this*********
// getData(1).then((res) => {
//   return getData(2); 
// }
// ).then((res) => {
//   return getData(3);
// }
// ).then((res) => {
//   console.log(res)
// }
// )
// or we can do this.*******

(async function(){
  console.log("getting data 1");
  await getData(1);
   console.log("getting data 2");
  await getData(2);
   console.log("getting data 3");
  await getData(3);
   console.log("getting data 4");
  await getData(4);
   console.log("getting data 5");
  await getData(5);
   console.log("getting data 6");
  await getData(6);
})();

// getData(1, () => {
//     console.log("getting data 2...")
//   getData(2, () => {
//     console.log("getting data 3....")
//     getData(3,() => {
//         console.log("getting data 4....")
//       getData(4);
//     }
//     );
//   }
//   );
// }
// )

// const getPromise = () => {
//   return new Promise((resolve, reject) => {
//     console.log("I'm a promise");
//     resolve("success");
//   }
//   );
// };
// let promise=getPromise();
// promise.then((resolved) => {
//   console.log("promise fulfilled", resolved)
// }
// );
// promise.catch((error) => {
//   console.log("rejected", error)
// }
// )

// function asyncfunc(){
//   return new Promise((resolve,reject) => {
//     setTimeout(() => {
//       console.log("some detail");
//       resolve("success");
//     },4000
//     )
//   }
//   )
// }
// function asyncfunc2(){
//   return new Promise((resolve,reject) => {
//     setTimeout(() => {
//       console.log("some detail 2");
//       resolve("success");
//     },4000
//     )
//   }
//   )
// }



// console.log("fetching data");
// let p1=asyncfunc();
// p1.then((res) => {
//   console.log("fetching data 2...");
//   let p2=asyncfunc2();
//   p2.then((res) => {
    
//   }
//   )
// }
// )



