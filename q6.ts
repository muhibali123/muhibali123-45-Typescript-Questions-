//                                                                    QUESTION

// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

//                                                                    ANSWER

let first_name: string = "Muhib";
// whitespaces names
console.log(`Name with White Spaces:\t\n${first_name}\t\n`);
// stripped names
console.log("Stripped name : ", first_name.trim());
