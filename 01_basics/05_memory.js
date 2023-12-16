//  Stack memory => used in primitve datatypes. There are 6 primitve datatypes : Number, String, Boolean, Null, Undefined, BigInt
// we get copy of memory which means if we change any data original values remain intact and copied data of memory gets changed.

// Heap memory => used in non primitive datatypes. There are 3 non primitive datatypes : Symbol , Object, Function
// we get reference of memory which means if we change any value original values get changed.


let myPetName ="Karan";

let anotherName = myPetName;
anotherName = "Hansraj";

console.log(myPetName);
console.log(anotherName);

// "Karan" => Heap Memory
// anotherName => Stack Memory


