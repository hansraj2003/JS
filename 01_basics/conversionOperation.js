let score = "Hansraj"

console.log(typeof score);

console.log(typeof (score));  // both are same.

let valueInNumber = Number(score);

console.log(typeof valueInNumber);
console.log( valueInNumber);


/*
33 => o/p is 33
"33abc" => o/p is NaN
true => 1; flase => 0
null => 0
undefined => NaN
*/
let isLoggedIn = "Hansraj"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log (booleanIsLoggedIn)

/*
1 => true
0 => false
"" => false
"abc" => true
*/

let someNumber = 33

let stringNumber = String(someNumber)

console.log(typeof stringNumber);
console.log(stringNumber);