const accountId = 144553
let accountEmail = "test@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Goa"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional 
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])