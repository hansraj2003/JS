// const tinderUser = new Object();
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Dheggu";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "dheggu@visa.com",
    fullname: {
        userFullName : {
            firstName: "dheggu",
            lastName : "sharma",
        }
    }
}

// console.log(regularUser.fullname.userFullName.lastName);

const obj2 = {3: 'a', 4: 'b'};
const obj3 = {5: 'a', 6: 'b'};
const obj1 = {1: 'a', 2: 'b'};

// const obj4 = Object.assign({}, obj1, obj2, obj3);
// console.log(obj4);

const obj4 = {...obj1, ...obj2, ...obj3};
// console.log(obj4);

const user = [
    {
        user: "1",
        email: "h@gmail.com",
    },
    {
        user: "2",
        email: "s@gmail.com",
    },
    {
        user: "3",
        email: "j@gmail.com",
    },
];

console.log(user[0].email);