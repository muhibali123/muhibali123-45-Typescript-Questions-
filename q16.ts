//                                                                    QUESTION

// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

//                                                                    ANSWER

let guest: string[] = ["Adeel", "Shariq", "Usman"];
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
  console.log(
    `${guest}  i have a great news that i found a bigger dinner table`
  );
});
