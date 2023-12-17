const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["Shaktiman", "naagraj"]

const myArr2 = new Array(0, 1, 2, 3, 4, 5)

// myArr2.push(6, 7)
// myArr2.pop()

// myArr2.unshift(10)
// myArr2.shift()
// console.log(myArr2)

//  Slice and Splice

console.log("A ", myArr2);

const myn1 = myArr2.slice(1, 3);
console.log("B ", myn1);

const myn2 = myArr2.splice(1, 3);
console.log("C ", myn2);