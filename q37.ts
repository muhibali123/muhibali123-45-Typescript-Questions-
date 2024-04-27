//                                                                    QUESTION

// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

//                                                                     ANSWER

function make_shirt(size: string, message: string) {
  console.log(
    `making a ${size} size t-shirt with the messages ${message} printed on it`
  );
}

make_shirt("small", "I love Python");
make_shirt("medium", "i love python");
make_shirt("xl", "I love typescript");
