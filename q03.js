//                                                                    QUESTION3
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
//                                                                    ANSWER
let person_name = "Saad Hashmani";
// Lower Case
console.log(person_name.toLowerCase());
// Upper Case
console.log(person_name.toUpperCase());
// Title Case
console.log(person_name.charAt(0) + person_name.slice(1).toLowerCase());
export {};
