const accountId = "01234"
let accountEmail = "hansraj@hululu.com"
var accountPassword = "123456"
accountCity = "Jaipur"
let accountState;
// accountId = 2 // const are not allowed to change

accountEmail = "hj@json.com"
accountPassword = "212121"
accountCity = "Dilli"

console.log(accountId);

/*
PREFER NOT TO USE VAR 
because of issue in block scope and functional scope.
*/
console.table ([accountEmail, accountPassword, accountCity, accountId, accountState])