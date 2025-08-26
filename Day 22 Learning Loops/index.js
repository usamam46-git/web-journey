console.log("i'm a tutorial on loops")
let a = 1;
// for (let i = 0; i < 1000; i++) {
//     console.log(a + i)
// }
let obj = {
    Name: "Usama",
    Role: "Programmer",
    Company: "Remote",

}
// for (const key in obj) {
//     }
// console.log(obj)
for (const key in obj) {
    const element = obj[key];
console.log(key,element)
}
// for (const key in obj) {
//     const element = obj[key];
// console.log(key)
// }
for (const c of "Usama") {
    console.log(c)
    
}
let p=10;
// while (p<50) {
//     console.log(p);
//     p++;
// }
do { console.log(p);
    p++;
    
} while (p<8)
