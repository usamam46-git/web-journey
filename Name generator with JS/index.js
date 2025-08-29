/* Create a business name generator by combining list of adjectives and shop name and another word


Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub



*/
let random = Math.random();
let first, second, third;

if (random < 0.33) {
    first = "crazy"
}
else if (random > 0.33 && random <= 0.66) {
    first = "Amazing"
}
else {
    first = "Fire"
}
random = Math.random();
if (random < 0.33) {
    second = "Engine"
}
else if (random > 0.33 && random <= 0.66) {
    second = "Foods"
}
else {
    second = "Garments"
}
random = Math.random();
if (random < 0.33) {
    third = "bros"
}
else if (random > 0.33 && random <= 0.66) {
    third = "limited"
}
else {
    third = "hub"
}

console.log(
    first,second,third
)