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

console.log("\n------------------STRINGS--------------------\n");

let thisIsAString = "Hello, I am a sequence of characters!";
let thisIsAnotherString = "Hello, another sequence of chars here :)";
let thisIsYetAnotherString = `Hello, yet another string here!`;
// There is NO difference between single, double, & backtick quoted strings
// "Hello" & 'Hello' & `Hello` are the same string for JS.

let aLongString = thisIsAString + thisIsAnotherString;
// ^ String concatenation - the plus, on strings, just adds them together one after the other

console.log(thisIsAString);
console.log(thisIsAnotherString);
console.log(thisIsYetAnotherString);

console.log(aLongString);

console.log("\n---------------------TYPEOF OPERATOR-------------------\n");

let aNumberVariable = 123;
console.log(
  "typeof with a variable containing a number:",
  typeof aNumberVariable
);
// typeof is an operator that allows you to know the type
// of a given value, of the content of variable, any value that you
// write after typeof ____

console.log("typeof 'String of data':", typeof "String of data");

console.log("\n-----------------------BOOLEAN---------------------------\n");

let areWeInNovember = true;
let areWeOnPlanetMars = false;

console.log("areWeInNovember: ", areWeInNovember);
console.log("areWeOnPlanetMars: ", areWeOnPlanetMars);
console.log("typeof true:", typeof true);

console.log("\n--------------------LOOSE TYPING------------------------\n");

let gramsOfSugar = 125; // number

console.log("gramsOfSugar:", gramsOfSugar);

gramsOfSugar = "125 grams"; // we assign a string to the same variable

console.log("gramsOfSugar:", gramsOfSugar);

let twoTimesTheSugar = 2 * gramsOfSugar;

console.log("twoTimesTheSugar:", twoTimesTheSugar);

// Variables in JavaScript can change type overtime.
// You can put a number in a variable...
// And then a string, in the same variable.
// JS will not complain. JavaScript is a Loosely Typed programming language.

// AVOID THIS AT ALL COSTS:
// AVOID ASSIGNING VALUES OF DIFFERENT TYPES TO THE SAME VARIABLE.
// Just one exception: null -- if you want to empty a variable, you can change it to null.
