const accountId=122;
let accountEmail="imam@gmail.com";
var accountPassword="Imam123";
accountCity="Hurhuri"; //we can directly initiliaze varibles in js but not recomended
let accountState;

// accountId=123; //can't change constant
accountEmail="Imam@outlook.com";
accountPassword="1234";
console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);
console.log(accountState);
/*
Output in table format we use console.table([])
*/
console.log([accountId,accountEmail,accountPassword,accountCity,accountState]);
