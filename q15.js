//                                                                    QUESTION
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
//                                                                    ANSWER
let guest = ["Adeel", "Shariq", "Usman"];
// guest.forEach(guest=>{
//     console.log(`${guest} you are invited on dinner at indus hotel`)
// })
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
export {};
