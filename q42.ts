//                                                                      QUESTIONS

// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

//                                                                      ANSWERS

let magician: string[] = ["Teller", "Dynamo", "Criss Angel"];

function show_magicians(magician_names: string[]) {
  magician_names.forEach((magician_names) => {
    console.log(`${magician_names}`);
  });
}
// show_magicians(magician_names)

function great_magician(magicians: string[]) {
  for (let i = 0; i < magicians.length; i++) {
    magicians[i] = magicians[i] + " The Great";
  }
}
great_magician(magician);
show_magicians(magician);
