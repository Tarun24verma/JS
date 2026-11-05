const account_id = 144553
let account_email = "tarunverma@gmail.com"
var account_password = "12345"
account_city = "Jaipur"
let account_state;

// account_id = 2 //Not allowed
account_email = "hfh@gmail.com"
account_password = "66646"
account_city = "kota"

console.log(account_id);
console.table([account_email,account_password,account_city, account_state]);

/*Prefer not to use var because of issue in block scope and funtctional scope*/