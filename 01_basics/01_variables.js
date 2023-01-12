const accountId=2261161
let accountEmail="darshit@google"
var accountPassword="123456"
accountCity="Marh"
let accountState

//now do our investigation

//1-accountId=2 //we cannot change constant it leads to error //not allowed

console.log(accountId);

accountEmail="joshi@google"
accountPassword="212121"
accountCity="Bhimtal"

//2- If we want to print all variable in one console we can use table and square brackets//

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

/*
In javascript for declaring any constant we have only one keyword const;
for declaring variables we have two keywords 1- let 2- var;
But in modern world we only use let;

Why prefer not to use var?
beacause of issue in block scope and functional scope;

IN javascript we can assign value to variable without using keyword i.e, accountCity
but this method should be avoided;

In javascript we can use use semicolon or not it is our mrji  i.e,accountState
if we don't assign value to variable than there undefined takes place asx you can see in run of accountState


*/


