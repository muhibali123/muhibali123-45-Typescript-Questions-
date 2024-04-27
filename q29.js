//                                                                    QUESTION
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
//                                                                     ANSWER
let favorite_fruits = ["mangos", "bananas", "apples"];
if (favorite_fruits.includes("mangos")) {
    console.log("I really like mangos");
}
if (favorite_fruits.includes("watermelons")) {
    console.log("I really like watermelons");
}
if (favorite_fruits.includes("bananas")) {
    console.log("I really like bananas");
}
if (favorite_fruits.includes("apples")) {
    console.log("I really like apples");
}
if (favorite_fruits.includes("oranges")) {
    console.log("I really like oranges");
}
export {};
