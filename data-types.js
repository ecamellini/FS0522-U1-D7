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
