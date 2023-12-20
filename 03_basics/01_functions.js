


function sayMyName() {
    console.log("H");
    console.log("A");
    console.log("N");
    console.log("S");
    console.log("R");
    console.log("A");
    console.log("J");
}

// sayMyName();

function twoNumbers(number1, number2){
    // let result = number1 + number2;
    // return result;

    return number1 + number2;                          // after return any code return below it will not exceute.
}
const result = twoNumbers(5, 9);

// console.log("Result: ", result);

function loginUsername(username) {
    if(!username){                                              // !username = username === undefined     ! means not.
      console.log('Please enter a username');
        return;
    }
    return `${username} just logged in`
}

// console.log(loginUsername());



function calculateCartPrice(val1, val2, ...num1){
    return num1;
}

// console.log(calculateCartPrice(200, 500, 800, 2000));

const user = {
    username: "Hansraj",
    price: 110,
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

// handleObject(user);

handleObject({
    username: "Hansraj",
    price: 399,
})

const myNewArray = [200, 400, 500]

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 300, 800, 1000]));