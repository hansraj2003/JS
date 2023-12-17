const marvel_heroes = [ "thor", "ironman", "spiderman"];
const dc_heroes = ["superman", "flash", "batman"]

// marvel_heroes.push(dc_heroes);

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

// const allHeroes = marvel_heroes.concat(dc_heroes)
// console.log(allHeroes);

const allNewHeroes = [...marvel_heroes, ...dc_heroes];
// console.log(allNewHeroes);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_anotherArray = anotherArray.flat(Infinity)
console.log(real_anotherArray);

console.log(Array.isArray("Hansraj"));
console.log(Array.from("Hansraj"));
console.log(Array.from({name: "Hansraj"}));  // Interesting

let score1 = 100;
let score2 = 200;
let score3 = 300; 

console.log(Array.of(score1, score2, score3));