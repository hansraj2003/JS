const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(acc, currval);
//     return acc + currval

// } , 0 ) 

// console.log(myTotal);
// acc = accumulator
// currval = current value

const myTotal = myNums.reduce( (acc, currval) => (console.log(acc, currval), acc + currval), 0 )

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999,
    },
    {
        itemName: "py course",
        price: 999,
    },
    {
        itemName: "app dev course",
        price: 5999,
    },
    {
        itemName: "data science course",
        price: 12999,
    },
]

const totalprice = shoppingCart.reduce( (acc, item) => acc + item.price, 0 );
console.log(totalprice);