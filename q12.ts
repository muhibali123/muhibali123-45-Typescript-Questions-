//                                                                    QUESTION

// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

//                                                                    ANSWER

let friends: string[] = ["Adeel", "Shariq", "Usman", "Haseeb"];

for (let i = 0; i < friends.length; i++) {
  console.log(friends[i] + " will you learn typescript today");
}

// Second Methood
// for each methood
// friends.forEach(friends=>{
//     console.log(`${friends} will you learn typescript today`)
// })
