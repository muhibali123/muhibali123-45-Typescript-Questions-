//                                                                    QUESTION
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
//                                                                     ANSWER
let alien_color = "yellow";
if (alien_color == "red") {
    console.log("you earned 15 points.");
}
else if (alien_color == "yellow") {
    console.log(" you earned 10 points");
}
else {
    console.log("you earned 5 points.");
}
export {};
