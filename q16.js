// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in yourlist. 
// name array
var gestArray = ["Jameel Ahmed", "Mehmood Sultan", "Rahat Fatima"];
// gestArray.map((items)=> console.log(`Hello,${items}you are invited to dinner`));
var canNotAttend = "Rahat Fatima";
// console.(log(`${canNotAttend} can not make it ,for dinner`);
var newGuest = "Zanaib";
gestArray[gestArray.indexOf(canNotAttend)] = newGuest;
// console.log(gestArray);
// gestArray.map((items)=> console.log(`Hello,${items}you are invited to dinner`));
console.log("Welcom all we found a bigger dinner table");
gestArray.unshift("Tanveer");
// console.log(gestArray);
var middleGest = "hamida";
var middleIndex = gestArray.length / 2;
gestArray.splice(middleIndex, 0, middleGest);
// console.log(gestArray);
gestArray.push("sadia");
// console.log(gestArray);
gestArray.map(function (item) { return console.log("\nDear ".concat(item, " you are invited to dinner")); });