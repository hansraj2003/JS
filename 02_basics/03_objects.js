// singleton
// Object.create

// object literals

const mySym = Symbol("key1");


const JsUser = {
    name: "Hansraj",
    "full name": "Hansraj Joshi",
    [mySym]: "mykey1",                            // with [] mySym will be treated as Symbol.
    Age: 20,
    Desh: "Bharat",
    email: "hansraj@startup.com",
    isLoggedIn: false,
    lastLoginDays: ['Monday', 'Saturday'],
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);      // No chance of accessing full name with dot.
console.log( JsUser[mySym]);  

JsUser.email = "hansraj@chatgpt.com";
Object.freeze(JsUser.email);
JsUser.email ="hansraj@adobe.com";
console.log(JsUser);
 