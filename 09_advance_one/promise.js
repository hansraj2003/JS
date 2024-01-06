const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Async task is completed.');
        resolve();
    }, 1000);
})

promiseOne.then(function () {
    console.log("Promise Consumed");
})

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('asyn task');
        resolve();
    }, 1000);
}).then(function () {
    console.log('ok')
})

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "hansraj2003", email: "kuchbhi@example.com" })
    }, 1000);
})

promiseThree.then(function (user) {
    console.log(user);
})

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "hansraj", password: "123" })
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username;
}).then((username) => {
    console.log(username);
}).catch(function (error) {
    console.log(error);
}).finally(() => console.log("the promise is finally resolved or rejcted"))

const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "js", password: "123" })
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive()

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://api.github.com/users/hansraj2003')
//         // console.log(response);
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("E:", error)
//     }
// }


// getAllUsers();

fetch('https://api.github.com/users/hansraj2003')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => console.log(error))