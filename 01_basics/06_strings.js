const name = "Hansraj";
const sports = "cricket";

// console.log(name + sports + " 18");

console.log(`My name is ${name} & my fav sports is ${sports}`);

const gameName = new String (`hansraj-game`)

console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));                                      // for checking index
// console.log(gameName.indexOf(`a`));
console.log(gameName);

const newString = gameName.substring(0,6); // index 6 is not included.
console.log(newString);

const anotherString = gameName.slice(-7,8);
console.log(anotherString);

// const newStringOne = "            Hansraj         ";
// console.log(newStringOne);
// console.log(newStringOne.trim());                                   // trim removes space

const url = "https://hansraj.com/hansraj%20joshi";
console.log(url.replace('%20', '-'));

console.log(url.includes('hansraj'));

console.log(gameName.split('-'));