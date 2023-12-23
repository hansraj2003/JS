// if
const isUserLoggedIn = true;

const temp = 41

// if (temp < 45) {
//     console.log('temperature less than 50');
// } else {
//     console.log('temperatue is greater than 50');
// }

const score = 200;

if (score > 200) {
    let power ='fly';
    console.log(`User Power: ${power}`);
}

// console.log(`User Power: ${power}`);

const balance = 1000;
// if (balance > 500) console.log("test");

// if (balance < 500) {
//     console.log('less than 500');
// } else if(balance < 750) {
//     console.log('less than 750');
// } else if (balance < 900) {
//     console.log('less than 900');
// } else {
//     console.log('less than 1200');
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true; 

if (userLoggedIn && debitCard && 2 == 2) {
    console.log("Allow to buy courses");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
// val1 = null ?? 10 ?? 15


// console.log(val1);

//  Terniary Operator

//  condition ? true : false

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");