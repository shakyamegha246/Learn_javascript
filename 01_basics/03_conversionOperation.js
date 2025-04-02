let score = "33asdh";
console.log(typeof(score));
console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

/* A number written in double quotes can be converted to a number , but a string cannot be converted to a number in type conversion . It will give Not a Number as output
 "33" => 33
 "34ggc" => NaN
 true => 1
  false => 0
  null => 0
  undefined => NaN
*/

let isLoggedIn = "Megha"
 let booleanIsLoggedIn = Boolean(isLoggedIn)
 console.log(booleanIsLoggedIn);

/* Boolean conversion
1 => true; 0 => false
"" => false
"Megha" => true
*/

let someNumber = 4235;
let stringNumber = String(someNumber);
console.log(typeof stringNumber);

/*A number can also be converted into string
*/
 

/* ************Operations************ */

let value = 3;
let negValue = -value;
console.log(negValue);

console.log(2+ 2);
console.log(2-2);
console.log(2*2);
console.log(2**2);
console.log(2**3);
console.log(2%3);
console.log(2/3);

let str1 = "hello";
let str2 = " Megha";
let str3 = str1 + str2;
console.log(str3); //Addition of two strings

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log( (2+4) *5 %3); // Not a good way to write code, use proper braceses

console.log(+true); //1
console.log(+""); //0

let num1 ,  num2, num3 ;
num1 = num2 = num3 = 2 + 2;

let gameCounter = 100;
gameCounter++;
console.log(gameCounter);
++gameCounter;
console.log(gameCounter);

// link to study  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment








 