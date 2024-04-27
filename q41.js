//                                                                      QUESTIONS
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
//                                                                      ANSWERS
const magician_names = ["Teller", "Dynamo", "Criss Angel"];
function show_magicians(magician_names) {
    magician_names.forEach((magician_names) => {
        console.log(`${magician_names}`);
    });
}
show_magicians(magician_names);
export {};
