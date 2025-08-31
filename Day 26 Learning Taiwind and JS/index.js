let a="Usama";
console.log(a);
let b="Ali";
console.log(b);
console.log(b[0]);
a.concat(b);
console.log(a);
console.log(a.concat(b));
let i=1;
let number=5
for (let i = 1; i <=10; i++) {
    console.log(number,"x",i,"=",i*5);
    
}
let random= Math.random();
let first, second, third;
if(random<0.33){
    first="Shahbaz";
}
else if(random<=0.66){
    first="Heera";
}
else{
    first="Butt";
}
random= Math.random();
if(random<0.33){
    second="Burger";
}
else if(random<=0.66){
    second="Shawarma";
}
else{
    second="Tikka";
}
random= Math.random();
if(random<0.33){
    third="Point";
}
else if(random<=0.66){
    third="Hub";
}
else{
    third="Corner";
}
console.log(first,second,third);

let obj={
    name:"Usama",
    gender:"Male",
    country:"Pakistan"
}
console.log(obj);
console.log(Object.keys(obj));
console.log(Object.values(obj));
