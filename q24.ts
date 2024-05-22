// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array



// Equality and Inequality Test 1
console.log("Equality test with string:" , "Apple" === "Apple");

// Equality and Inequality Test 2
console.log("Equality test with string:" , ("Apple" as string) != "Orange");

// Test using the lower case function 3
console.log("Lower case function test:" ,"Hello" .toLowerCase() === "hello");

// Numerical test involving equality 4
console.log("Equality test with string:" , 26 === 26);

// Numerical test involving and inequality 5
console.log("Inequality test with string:" , (26 as number) != 35);

// greater than test 6
console.log("Greater than test: " ,10 > 5);

// less than test 7
console.log("less than test: " ,5 > 10);

// greater than or equal to 8
console.log("Greater than and equal to test: ",10 >= 10);

// Test using "and"  operator
console.log("And operator test: " ,5===5 && 10 > 5);

// Test using "or" operator

console.log("or operator test: " ,5===5 || false);

// Test whether an item is a array
const fruits :string[] = ['Nashpati' , 'Banana' , 'Amrood'];
console.log('Test "Nashpati" in the array: ' , fruits.includes("Nashpati")); 

// Test whether an item is not a array
// console.log('Testing "Apple" is not in array: ' , fruits.includes('Apple'));   

console.log('Testing "Apple" is not in array: ' , !fruits.includes('Apple'));




































// less than or equal to
console.log("less than or equal to test:" , 5 <= 10);
