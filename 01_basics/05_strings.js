const name = "megha";
const repoCount = 50;

// console.log( name + repoCount + "Value"); 

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('meghashakya'); // declaring string

console.log(gameName[0]);  //Accessing the value at a particular position
console.log(gameName.__proto__);

console.log(gameName.length );  //length of string

console.log(gameName.toUpperCase()); //converting to uppercase

console.log(gameName.charAt(5)); //character at position

console.log(gameName.indexOf('h')); //index position

 const newString = gameName.substring(0,5); //print a part of the string
 console.log(newString);

 const anotherString = gameName.slice(-8,4); //print string in reverse order
 console.log(anotherString);

 const newStringOne = "    megha";
 console.log(newStringOne);
 console.log(newStringOne.trim());  // remove the spaces

 const url = "https:/megha.com/megha%20shakya";

 console.log(url.replace('%20','_')); //replaces the value

 console.log(url.includes('megha')); //checks whether the value is present or not

 console.log(gameName.split('-'));
 
 
 
 
 




