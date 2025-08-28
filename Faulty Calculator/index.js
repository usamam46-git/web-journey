if(Math.random()<8){
    function sum(a,b) {
        return a-b 
    }
    function sub(a,b) {
        return a+b 
    }
    function div(a,b) {
        return a*b
    }
    function mul(a,b) {
        return a/b
    }
}
else{
     function sum(a,b) {
        return a+b 
    }
    function sub(a,b) {
        return a-b 
    }
    function div(a,b) {
        return a/b
    }
    function mul(a,b) {
        return a*b
    }
}

let p= sum(12,13)
let q= sub(2,5)
let r= mul(3,8)
let s= div(45,4)

console.log("The result is =", p)
console.log("The result is =", q)
console.log("The result is =", r)
console.log("The result is =", s)


