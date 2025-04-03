//Data is categorised on the basics of how it is stored in memory. It is of two type - Primitive and Non- Primitive.
/* 
Primitive Data Types- It is of seven types -> String, Number, Boolean, null, undefined,Symbol and BigInt.

Reference Type/ Non-Primitive -> Arrays, Objects, Functions.

Javascript is a dynamically typed language.
*/

const score = 100;
const scoreValue = 100.8;

const isLoggedIn = false;
const outsidetemp = null;
let userEmail;

const id = Symbol('1234')
const anotherId = Symbol('1234');
console.log(id === anotherId);

const bigNumber = 234236347736363n; // bigInt is denoted by number ending with n
console.log(typeof bigNumber);

const heros = ["Megha", "Radha", "Ram"] // array
let myObj = {
    name: "Megha",
    age: 22,
}    //object
console.log(heros);
console.log(myObj);

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myFunction);
console.log(typeof myObj); 

/* **************Memory in Javascript*************** */
//Stack (Primitive), Heap (Non- Primitive)
 
let myYouTubeName = "MeghaShakya"
let anotherName = myYouTubeName;
anotherName = "ShakyaMegha"
console.log(anotherName);
console.log(myYouTubeName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

console.log(userOne);

let userTwo = userOne;
userTwo.email = "sagcfsayu@google.com"
console.log(userTwo);









