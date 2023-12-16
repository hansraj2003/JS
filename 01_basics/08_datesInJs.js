let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
//console.log(myDate.);
// console.log(myDate.);
//console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 11 ,16 ,9 , 19);
// console.log (myCreatedDate.toDateString())

let myCreatedDate = new Date("12-16-2023");  // mm/dd/yyyy
// console.log (myCreatedDate.toLocaleString())

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());


console.log(newDate.toLocaleString('default', {
    weekday : "long",
    timeZone: 'Indian/Cocos',
}));