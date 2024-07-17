const accountId = 144553
let accountEmail = "raghuvansh@gmail.com"
var accountPassword = "12345"
accountCity = "Kathmandu"
let accountState

//accountId = 2 //not allowed

accountEmail = "rr@gmail.com"
accountPassword = "12"
accountCity = "Bengaluru"

/* 
Prefer not to use var
because of issue in block scope and functional scope
*/ 

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])