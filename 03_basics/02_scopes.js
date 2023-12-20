// var c = 300
let a = 300

if (true) {
    let a = 10
    const b = 20
    // var c = 30
    console.log("Inner: ", a);                                  // block scope
}

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];

// }

// console.log(a);                                                // global scope 
// console.log(b);
// console.log(c);


function one() {
    const username = "Hansraj";

    function two() {
        const website = "youtube";
        console.log(username);
    }
    // console.log(website);

    two();
}

// one()

if (true) {
    const username = "Hansraj"

    if (username === "Hansraj") {
        const website = "youtube"
        console.log(username + " " + website);
    }
    // console.log(website);
}

// console.log(username);

// +++++++++++++++++++++++++++++++ interesting +++++++++++++++++++++++++++++++

console.log(addone(5));

function addone(num) {
    return num + 1
}

console.log(addTwo(5));
const addTwo = function (num) {
    return num + 2
}

