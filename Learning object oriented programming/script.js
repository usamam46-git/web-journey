// let student={
//    name:"Usama",
//    Profession:"Developer",
//    printProfession: function(){
//     console.log("Profession= ",this.Profession);
//    }
// }

// let salary={
//    calcTax(){
//       console.log("Tax rate is 10%");
//    }
// }

// let employee={
//    name:"Usama",
//    salary:"500000"
// }

// employee.__proto__=salary;

// class toyotaCar{
//   constructor(brand,milage){
//    console.log("Made new object.");
//    this.brand=brand;
//    this.milage=milage;
//   }
// //   Constructor does all the initialization works
//    start(){
//       console.log("start")
//    }
//    stop(){
//       console.log("stop")
//    }
// }

// const fortuner = new toyotaCar("Fortuner","100km");
// const lexus = new toyotaCar("Lexus","200km");

// class parent{
//    hello(){
//       console.log("hello");
//    }
// }
// class child extends parent{

// }

// class person{
//    constructor(){
//       this.specie="Homo Sapiens";
//    }
//    eat(){
//       console.log("eat");
//    }
//    sleep(){
//       console.log("sleep");
//    }
// }

// class employee extends person{
//    constructor(branch){
//       // To envoke parent constructor otherwise it will be giving an error.
//       super(); 
//       this.branch=branch;
//    }
//    work(){
//       console.log("Working as an engineer.")
//    }
// }

// let usamaobj= new employee("Chemical");
// }

// class user {
//    constructor(name, Email) {
//       this.name = name;
//       this.Email = Email;
//    }
//    viewData() {
//       console.log("View website's data");
//    }
// }

// class admin extends user {
//    editData(){
//       console.log("Edit website's data.")
//    }
// }

// const qadir= new admin("Qadir","qadir1gmail")

// class BankAccount{
//    constructor(owner,balance){
//       this.owner=owner;
//       this.balance=balance;
//    }
//    depositAmount(amount){
//       this.balance+=amount;
//       console.log(`Desposited Amount=${amount}.New Balance=${this.balance}`);
//    }
//    withdrawAmount(amount){
//       if(amount>this.balance){
//          console.log("Insufficient Baalance");
//       }
//       else{
//          this.balance=this.balance-amount;
//          console.log(`Withdrawn Amount= ${amount}. New Balance=${this.balance}`);
//       }

//    }
//    getBalance(){
//       console.log(`${this.owner}:${this.balance}`);
//    }

// }

// let usama= new BankAccount("usama",333333);

class Animal{
   constructor(name,sound){
      this.name=name;
      this.sound=sound;
   }
   makeSound(){
      console.log(`${this.name} says ${this.sound} `);
   }
}

class Dog extends Animal{
   constructor(name){
      super(name, "bhau bhau");
   }
   makeSound(){
      console.log(`${this.name} barks ${this.sound}`);
   }
   
}

let d= new Dog("Buddy");

