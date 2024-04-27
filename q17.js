//                                                                    QUESTION
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
//                                                                    ANSWER
let guest = ["Adeel", "Shariq", "Usman"];
while (guest.length > 0) {
    let removeguest = guest.pop();
    console.log(`sorry ${removeguest} i can't invite on dinner`);
}
guest.unshift("Huzaifa");
guest.splice(guest.length / 2, 0, "Abdullah");
guest.push("Wasay");
guest.forEach((guest) => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});
guest.unshift("Qadir");
guest.splice(guest.length / 2, 0, "Ebad");
guest.forEach((guest) => {
    console.log(`${guest}  i have a great news that i found a bigger dinner table`);
});
console.log("Sorry unfortunately the big table is not arrange so i invite only two people");
while (guest.length > 2) {
    let anotherremoveguest = guest.pop();
    console.log(`${anotherremoveguest} sorry you can't invited on dinner`);
}
guest.forEach((guest) => {
    console.log(`${guest} you are still invited on dinner`);
});
while (guest.length > 0) {
    let moreremoveguest = guest.pop();
    console.log(`${moreremoveguest} Sorry you are not invited on dinner`);
}
console.log(guest);
export {};
