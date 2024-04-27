//                                                                    QUESTION
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
//                                                                    ANSWER
let guest = ["Adeel", "Shariq", "Usman"];
guest.forEach((guest) => {
    console.log(`${guest} you are invited on dinner at indus hotel`);
});
console.log(`the number of people which are invited on dinner is : ${guest.length}`);
export {};
