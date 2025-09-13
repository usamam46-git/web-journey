// function sum(a, b) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(a + b);
//             resolve("success");
//         }
//             , 3000)
//     }
//     )
// };
// console.log('Getting first amount!')
// sum(1,2).then((res) => {
//     console.log('Getting second amount')
//   sum(4,3).then((res) => {
//     console.log('Getting third amount')
//     sum(6,4).then((res) => {
//       console.log(res)
//     }
//     )
//   }
//   )
// }
// )

// (async () => {
//     console.log("Getting data 1")
//     await sum(1, 2);
//     console.log("Getting data 2")
//     await sum(3, 4);
//     console.log("Getting data 3");
//     await sum(4, 6);
//     console.log("Success");
// })();

// Create a function flipCoin() that:

// Resolves with "Heads" half the time

// Rejects with "Tails" the other half

// Handle both with .then() and .catch().

// function flipCoin(heads, tails) {
//     return new Promise((resolve, reject) => {
//         let random = Math.random();
//         if (random < 0.5) {
//             console.log(heads);
//             resolve("Heads");
//         } else { console.log(tails);
//             reject("Tails");
//          }
//     }
//     )
// }

// (async () => { 
//     await flipCoin("Heads wins!", "Tails loses!")
//     .then((result) => console.log("Resolved:", result))
//     .catch((error) => console.log("Rejected:", error));
// })();
// flipCoin("Heads wins!", "Tails loses!")
//     .then((result) => console.log("Resolved:", result))
//     .catch((error) => console.log("Rejected:", error));

// function step1() { return Promise.resolve("Step 1 done"); }
// function step2() { return Promise.resolve("Step 2 done"); }
// function step3() { return Promise.resolve("Step 3 done"); }

// step1().then((res) => {
//   console.log(res);
//   step2().then((res) => {
//     console.log(res);
//     step3().then((res) => {
//         console.log(res);
//       console.log("All Done");
//     });
//   });
// });

// Make two functions taskA() and taskB() that each resolve after a random delay.

// Call them one after another using await.

// function taskA(){
//     return new Promise((resolve,reject) => {
//       setTimeout(() => {
//         console.log("Printing Task A");
//         resolve("Success");
//       }
//       ,3000)})};

// function taskB(){
//     return new Promise((resolve,reject) => {
//       setTimeout(() => {
//         console.log("Printing Task B");
//         resolve("Success");
//       }
//       ,3000)})};

//   (async () => {
//     await taskA();
//     await taskB();
//     console.log("Done");
//   })();

//     (async () => {
//   await Promise.all([taskA(), taskB()]);
//   console.log("Done");
// })();


// Write a function delayedLog(msg, time) that returns a promise which logs msg after time milliseconds.

// function delayedLog(msg,time){
//     return new Promise((resolve,reject) => {
//       setTimeout(() => {
//         console.log(msg);
//         resolve("Success");
//       }
//       ,time)
//     })};

// (async () => { console.log("Printing first message");
//     await delayedLog("Hii",1000);
//     console.log("Printing second message");
//     await delayedLog("I'm Usama",2000);
//     console.log("Printing third message");
//     await delayedLog("I'm a developer!",3000);
//     console.log("Done");
// })();

// (async () => {
//     console.log("Starting parallel logs");
//     await Promise.all([
//         delayedLog("Hii",1000),
//         delayedLog("I'm Usama",2000),
//         delayedLog("I'm a Developer",3000),

//     ])
//     console.log("Done")
// })();

// 2. Random Success or Failure

// Create randomTask():

// Resolves "Success!" 50% of the time

// Rejects "Failed!" otherwise

// Call it 5 times inside an async function and log the results.

// function random() {
//     return new Promise((resolve, reject) => {
//         let randomNum = Math.random();
//         if (randomNum <= 0.5) {
//             resolve("Success");
//         }
//         else {
//             reject("Failure");
//         }
//     })
// };

// (async () => {
//     try {
//        console.log("Result: ", await random());

//     }
//     catch (err) {
//         console.log("Error :",err);
//     }})();

// . Promise.all Example

// Make 3 tasks (task1, task2, task3) that each resolve after a random delay (1–3 sec).

// Run them in parallel with Promise.all and log "All tasks done".

// function task1(){
//     return new Promise((resolve,reject) => {
//       setTimeout(() => {
//         console.log("Done with task 1")
//         resolve("Success");
//       }
//       ,1000)})};
// function task2(){
//     return new Promise((resolve,reject) => {
//       setTimeout(() => {
//         console.log("Done with task 2");
//         resolve("Success");
//       }
//       ,2000)})};
// function task3(){
//     return new Promise((resolve,reject) => {
//       setTimeout(() => {
//         console.log("Done with task 3");
//         resolve("Success");
//       }
//       ,3000)})};

// (async () => {
//    await Promise.race([
//     task1(),
//     task2(),
//     task3()
//     ])
// })();

// function counting(number){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//           console.log(number);
//           resolve("Success");
//         },1000
//         )})};
// (async () => {
//     for (let i = 5; i >=1; i--) {
//         await counting(i);
//     }
//      console.log("Gooo!");
// })();

// 8. Chained Await

// Write 3 async functions: step1(), step2(), step3().

// Each step should only run if the previous one succeeds.

// Add a chance of failure at each step and handle it with try/catch.

function step1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve("Step 1 completed");
            }
            else {
                reject("Step 1 rejected");
            }
        }
            , 1000)
    })
};
function step2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve("Step 2 completed");
            }
            else {
                reject("Step 2 rejected");
            }
        }
            , 1000)
    })
};
function step3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve("Step 3 completed");
            }
            else {
                reject("Step 3 rejected");
            }
        }
            , 1000)
    })
};

(async () => {
    try{
        console.log(await step1());
        console.log(await step2());
        console.log(await step3());
        console.log("All steps completed🎉");
    }
    catch(error){
        console.log(error);
    }
})();






