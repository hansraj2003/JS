const user = {
    username: "Hansraj",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Rohit"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Hansraj";
//     console.log(this.username);                                                // "this" is used in object and it is nnot working in function.
// } 

// chai();

// const chai = function () {
//     let username = "Hansraj";
//     console.log(this.username);
// }

// const chai = () => {
//     let username = "Hansraj";
//     console.log(this);
// }

// chai();

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2   
// const addTwo = (num1, num2) =>  (num1 + num2)                         // agar {} add kra to return keyword likhna padega or () add kra toh nahi likhna pdega.

const addTwo = (num1, num2) => ( {username: "Hansraj"} )        

console.log(addTwo(2, 9));