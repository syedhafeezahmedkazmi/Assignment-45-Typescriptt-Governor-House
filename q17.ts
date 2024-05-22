// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.





                
// name array
let gestArray:string[] = ["Jameel Ahmed","Mehmood Sultan","Rahat Fatima"];

// gestArray.map((items)=> console.log(`Hello,${items}you are invited to dinner`));


let canNotAttend:string = "Rahat Fatima";
// console.(log(`${canNotAttend} can not make it ,for dinner`);

let newGuest :string = "Zanaib";
gestArray[gestArray.indexOf(canNotAttend)]=newGuest;
// console.log(gestArray);

// gestArray.map((items)=> console.log(`Hello,${items}you are invited to dinner`));

// console.log("Welcom all we found a bigger dinner table");
gestArray.unshift("Tanveer");
// console.log(gestArray);

let middleGest:string = "hamida";
let middleIndex = gestArray.length/2;
gestArray.splice(middleIndex,0,middleGest);
// console.log(gestArray);
gestArray.push("sadia");
console.log(gestArray);

// gestArray.map((item)=> console.log(`\nDear ${item} you are invited to dinner`));

console.log("we can invite only two people for dinner!");



while(gestArray.length>2){
   let removegest = gestArray.pop();
    console.log(`\nsorry ${removegest} we can't invite you to dinner`);
}

gestArray.map((item)=> console.log(`\n${item} you are still invited to dinner`));

gestArray.pop();
gestArray.pop();
console.log(gestArray);



















