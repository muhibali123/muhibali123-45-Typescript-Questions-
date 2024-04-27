//                                                                      QUESTION
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
//                                                                      ANSWER
function make_sandwiches(...items) {
    console.log(`Making a sandwich with: ${items.join(", ")}.`);
}
make_sandwiches("ham", "cheese");
make_sandwiches("turkey", "lettuce", "tomato");
make_sandwiches("avocado", "sprouts", "mustard", "mayo");
export {};
