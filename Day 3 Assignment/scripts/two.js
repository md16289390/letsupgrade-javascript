console.log("Answer 2");
let user_input = String(prompt(`Enter OS name and version separated by a space.`));
let user_input_array = user_input.split(" ");
console.log(`The OS name is '${user_input_array[0]}' and version is '${user_input_array[1]}'.`);
