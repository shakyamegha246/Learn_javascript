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
  