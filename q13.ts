//                                                                    QUESTION

// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

//                                                                    ANSWER

let favourite_transport: string[] = [
  "honda motorcycle",
  "toyota fortuner",
  "Leader Spyder 27.5T MTB Cycle",
];

for (let i = 0; i < favourite_transport.length; i++) {
  console.log("I would to like own a " + favourite_transport[i]);
}
