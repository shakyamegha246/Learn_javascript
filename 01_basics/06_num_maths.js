const score = 600;
console.log(score);


const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(3)); // gives the point vlaue

const otherNumber = 1265.235;
console.log(otherNumber.toPrecision(3));

const hundreds = 10000000;
console.log(hundreds.toLocaleString('en-IN'));


/* *****************Maths********************* */

console.log(Math);
console.log(Math.abs(-665));  //changes the negative value to positive value.
console.log(Math.round(54.6)); // rounds off the value

console.log(Math.ceil(423.2)); //gives the round of upper vlaue
console.log(Math.floor(4.9)); // gives the round off lower value

console.log(Math.min(3,6,1,6,9)); //give the minimum value
console.log(Math.max(3,4,8,2,9,4)); // gives the maximum value

console.log(Math.random());

console.log(Math.random() *10);

console.log((Math.random() *10) +1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random()  * (max- min + 1) ) + min)
















