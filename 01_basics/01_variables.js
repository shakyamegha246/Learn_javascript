const accountId = 144553
let accountEmail = "shakyamegha123@gmail.com"
var accountPassword = "123456"
accountCity = "Jaipur"
let accountState;  // The value is not assigned. The value is undefined in javascript.

// accountId = 2     Not allowed

accountEmail = " dfwgfwe@gmail.com"

accountPassword = "34235"

accountCity = "Lucknow"

// console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassword);
// console.log(accountCity);      ****Instead of showing each variable by repeating console we can use console.table for this to print all values in a tabular form*****

console.table([accountId, accountEmail , accountPassword , accountCity ,accountState])






//In this video we have learnt about the variables in javascript. We can declare variables in three ways in js.
//const means the value cannot be changed in future. We cannot change the value assigned to const in any case.
// ****Prefer not to use var - because of block scope and functional scope *****
// Instead of using var , use let everywhere.

//We can also declare a variable without using var, let or const , just by typing the name of the variable and assigning the value to it. This is not the good practise , always declare variable by declaring them.
