const myObject = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by apple",
}

for (const key in myObject) {
    console.log(`${key} is shortcut for ${myObject[key]}`);
}

const programming = ["js", "cpp", "rb", "swift"];

for (const key in programming) {
    console.log(programming[key]);
}

// for (const key of programming) {
//     console.log(key);
// }

// const map = new Map()
// map.set("IN", "India")
// map.set("IN", "India")
// map.set("USA", "United States of America")
// map.set("Fr", "France")

// for (const key in map) {                                             // Map is not iteratble in forin loop.
//     console.log(key);
// }

