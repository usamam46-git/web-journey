
function nice(name) {
    console.log("Hey " +name+ " how are you?")
    console.log("Hey" +name+ "how was your day?")
    console.log("Hey" +name+ "what did you learn?")
    console.log("Hey" +name+ "what are your subjects?")
}

nice("Harry")
nice("Abdullah")

function sum(a,b,c=4){
    // console.log(a+b);
    return a+b+c
}
result1 = sum(3,5)
result2 = sum(2,8,10)
result3 = sum(7,4)
console.log("The sum of these numbers is", result1)
console.log("The sum of these numbers is", result2)
console.log("The sum of these numbers is", result3)

const func2= (p)=>{
    console.log("I'm an arrow function ",p)
}
func2(33)
func2(44)
