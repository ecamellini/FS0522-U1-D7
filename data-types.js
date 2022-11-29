console.log("------------------NUMBERS-------------------\n");

let numberOfDays = 30; // Number of days of the month
// ^ integer number

let myHeight = 1.75; // Height in meters
//  ^ floating point number

let yourHeight = 2;

console.log("My height: ", myHeight);
console.log("Your height: ", yourHeight);

// let totalHeight = myHeight + yourHeight;
// console.log("Total height: ", totalHeight);
console.log("Total height: ", myHeight + yourHeight); // Same as above
//                              ^ Wherever I can put a value, I can also:
//   1) use a variable (get its value)
//   2) put an expression, an JS will solve it

console.log("\nThe result of a string divided by a number:", "Hello" / 25);

console.log("\n------------------UNDEFIEND VS NULL-------------------\n");

// We create a variable that will contain whatever the user types
// into a text field.

// At the beginning the user did not type anything yet
let inputFromTheUser;
console.log(
  "Input from the user (they did not type anything...):",
  inputFromTheUser
); // undefined

// let inputFromTheUser; // Cannot redeclare variable
//    ^ if you execute the program with this line, it will error 💥

// The user typed something
inputFromTheUser = "Hello I am writing into the text field!";
console.log("The user typed:", inputFromTheUser);

// Then we empty the field
inputFromTheUser = null;
console.log("The field is now emptied:", inputFromTheUser);

// inputFromTheUser = undefined;
// Nobody prevents you from using undefined, but usually
// we use null when we explicitly empty a variable.
// undefined -- if possible, we leave it to JS, it will be put
// in variables just by JS, by default.
