// let arr=[1,2,3,4,5];
// let newarr=[];
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
    // console.log(element);
    // newarr.push(element**2);
// }
// console.log(newarr);
// let newarr= arr.map((v)=>{
//     return v**2});
// console.log(newarr);
// const graterthanfive= (e)=>{
//     if(e>=5){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(arr.filter(graterthanfive));
// let arr2=[1,2,3,4,5];
// const red= (a,b)=>{
//     return a*b;
// }
// console.log(arr2.reduce(red));
let a=6;
function facfor(number){
    let fac=1;
    for (let index = 1; index <= number; index++) {
    fac=fac*index;        
        
    }
    return fac
}
console.log(facfor(a));
let newarr=[1,2,3,4,5,6];
let red=(a,b)=>a*b;
console.log(newarr.reduce(red));