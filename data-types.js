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

console.log("\n----------------------ARITHMETIC OPERATORS----------------\n");

console.log("5 + 10", 5 + 10); // 15
console.log("10 / 3", 10 / 3); // 3.333333
console.log("10 - 3 + 6", 10 - 3 + 6); // 13
console.log("10 * 3 - 1", 10 * 3 - 1); // 29
console.log("10 * (3 - 1)", 10 * (3 - 1)); // 20 -- you can use round brackets to define priority
console.log("10 + (15 * (20 / 2)) - 1", 10 + 15 * (20 / 2) - 1);

// USE AS MANY BRACKETS AS YOU WANT -- always be explicit about what operation you want to do before

console.log("16 % 3", 16 % 3); // Remainder of the integer division.
// 1) divide 16 times 3 -> but the result is integer
//    -- how many times we can fit the 3 inside the 16
//    -- 3 - 6 - 9 - 12 - 15 ---> 5 times
//    How much we miss to reach 16? 1.
//    1 is the remainder of the integer division.

console.log(
  "\n----------------CHECKING IF A NUMBER IS EVEN OR NOT---------------\n"
);

// If you can EXACTLY divide a number by 2, it is even.
// Otherwise it is odd...

// EXACTLY DIVIDE MEANS: the result is an integer -> there is no remainder

let numberEvenOrOdd = -14; // Try to change this and see what happens...
console.log(numberEvenOrOdd % 2); // --> if numberEvenOrOdd is even --> this will print 0

console.log(
  "\n------------------CONCATENATION & LOOSE TYPING---------------\n"
);

console.log("Hello " + 123 + " what's happening " + true);

// BEWARE ABOUT THIS ^
// The plus operato in JS, if you apply it to things that are not NUMBERS
// 1) Convert everything into strings
// 2) concatenate all the things together

// IF POSSIBLE, AVOID MIXING DATA-TYPES BECAUSE OPERATORS BECOME UNPREDICTABLE
// 12 + "12" = "1212"
// 12 * "12" = NaN
// ...
// not consistent behaviours

console.log("\n--------------PARSING----------------\n");

// Parsing is the act of extracting some information out of a string

let sugar = "125 g";
let water = "1 l";

let sugarAmount = parseInt(sugar);
let waterAmount = parseInt(water);
// Suppose we KNOW that water is in liters, so we convert it into grams
let totalWeight = sugarAmount + waterAmount * 1000;

console.log("sugar:", sugar);
console.log("water:", water);
console.log("totalWeight (water converted into grams):", totalWeight);

// parseInt("Hello") ---> NaN

console.log("We can also parse float numbers:", parseFloat("1.345 grams"));

console.log(
  "parseInt('123 grams and 1 liter')",
  parseInt("123 grams and 1 liter")
);

console.log(`parseInt("Hello")`, parseInt("Hello"));

console.log("\n-------------------EQUALITY & INEQUALITY---------------\n");

let numberToGuess = 25;
let userAttempt = 12; // Change this and see what happens
// The user is trying to guess the number 25...

// console.log("Correct guess?", numberToGuess == userAttempt);
//                ^^^ NEVER USE THE ==, ALWAYS USE THE ===
// WHY? BECAUSE THIS WILL RESULT true even if you do "25" == 25

console.log("Correct guess?", numberToGuess === userAttempt);

// Inequality in JS -- different from -- you write it !==
console.log("The opposite of the result above:", numberToGuess !== userAttempt);

// For the same reason, NEVER USE != with a single euquals

console.log("If you want to compare strings and number, use parsing!");
console.log("'20' === 20", "20" === 20);
console.log("parseInt('20') === 20", parseInt("20") === 20);

console.log("\n-------------------LOGICAL OPERATORS---------------\n");

// Imagine that we have a form where the user can insert
// 1) Their height, as a number
// 2) Their hair color, as a string

let height = 170; // Change these values to simulate different user inputs
let hairColor = "red";

// We want to make a program that tells if the user
// can be casted for a movie or not.
// The user can be casted for the movie only if:
// -- taller than 185 & with blond hair
// -- shorter than 175 & with brown or red hair

// When you need to translate some logic into JS,
// or some decisions that you're making
// use variables names that answer to your questions.

let isTallerThan185 = height > 185;
console.log("isTallerThan185: ", isTallerThan185);

let hasBlondeHair = hairColor === "blonde"; // This will be true if we get "blonde" inside hairColor
console.log("hasBlondeHair: ", hasBlondeHair);

// THIS IS AN AND OPERATOR -- it is an operator for boolean values.
// It results true only of they are both true together
let isTallerThan185AndBlonde = isTallerThan185 && hasBlondeHair;

// isTallerThan185AndBlonde = height > 185 && hairColor === "blonde";
//          ^ this is the same thing as above, but without storing temprary results in variables
console.log("Is taller than 185 and blonde: ", isTallerThan185AndBlonde);

let isShorterThan175 = height < 175;
// OR OPERATOR -- true whenever one of the two is true
let hasBrownOrRedHair = hairColor === "brown" || hairColor === "red";

let isShorterThan175AndBrownOrRedHaired = isShorterThan175 && hasBrownOrRedHair;
console.log(
  "Is shorter than 175 and brown or red haired: ",
  isShorterThan175AndBrownOrRedHaired
);

let canCastForTheMovie =
  isTallerThan185AndBlonde || isShorterThan175AndBrownOrRedHaired;

console.log("Can the user join the cast?", canCastForTheMovie);

// This is the same: but harder to read (?)
// For sure it's easier to forget a parenthesis here & introduce a bug in your code.
// canCastForTheMovie =
//   (height > 185 && hairColor === "blonde") ||
//   (height < 175 && (hairColor === "brown" || hairColor === "red"));
