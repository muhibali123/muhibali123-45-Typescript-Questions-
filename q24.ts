//                                                                    QUESTION

// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array

//                                                                     ANSWER

// • Tests for equality and inequality with strings

let vegetable1: string = "carrot";
let vegetable2: string = "onion";

console.log("Inequality test:");
console.log(vegetable1 !== vegetable2); //true
console.log("Equality test:");
console.log(vegetable1 === vegetable2); //false

// • Tests using the lower case function

let name1: string = "Muhib Ali Siddiqui";
console.log("test using lower case function");
console.log(name1.toLowerCase() === "muhib ali siddiqui"); //true

console.log("test using lower case function");
console.log(name1.toLowerCase() === name1); //false

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

let num1: number = 10;
let num2: number = 5;

console.log("equality test");
console.log(num1 == num2); //false

console.log("inequality test");
console.log(num1 !== num2); //true

console.log("greater than");
console.log(num1 > num2); //true

console.log("less than");
console.log(num1 < num2); //false

console.log("greater than equal to");
console.log(num1 >= num2); //true

console.log("less than equal to");
console.log(num1 <= num2); //false

// • Tests using "and" and "or" operators

let x: number = 10;
let y: number = 5;
let z: number = 15;

console.log("And operator test:");
console.log(x > y && x < z); //true

console.log("Or operator test:");
console.log(x < y || x > z); //false

// • Test whether an item is not in a array

let numbers: number[] = [1, 2, 3, 4, 5, 6];

console.log("an item is an array");
console.log(numbers.includes(3)); //true

console.log("an item is not in an array");
console.log(numbers.includes(9)); //false

console.log("an item is not in an array");
console.log(!numbers.includes(9)); //false
