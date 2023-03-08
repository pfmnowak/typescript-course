/////////////////////////////////////////////////
// Basics

// console.log("TypeScript code...");

// const add = (n1: number, n2: number) => {
//   return n1 + n2;
// };

// const number1 = 5;
// const number2 = 2.8;

// const result = add(number1, number2);

// console.log(result);

/////////////////////////////////////////////////
// Core Types

// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Max",
//   age: 30,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// };

// enum Role {
//   ADMIN = 5,
//   READ_ONLY,
//   AUTHOR,
// }

// const person = {
//   name: "Max",
//   age: 30,
//   hobbies: ["Sports", "Cooking"],
//   role: Role.ADMIN,
// };

// console.log(person.nickname);

/////////////////////////////////////////////////
// Union Types, Aliases

// type Combinable = number | string;
// type ConversionDescriptor = "as-number" | "as-text";

// const combine = (
//   input1: Combinable,
//   input2: Combinable,
//   resultConversion: ConversionDescriptor
// ) => {
//   let result: Combinable;
//   if (
//     (typeof input1 === "number" && typeof input2 === "number") ||
//     resultConversion === "as-number"
//   ) {
//     result = +input1 + +input2;
//   } else {
//     result = input1.toString() + input2.toString();
//   }
//   return result;
// };

// const combinedAges = combine(30, 26, "as-number");
// console.log(combinedAges);

// const combinedStringAges = combine("30", "26", "as-number");
// console.log(combinedStringAges);

// const combinedNames = combine(30, 26, "as-text");
// console.log(combinedNames);

/////////////////////////////////////////////////
// Function Types

// const add = (n1: number, n2: number) => {
//   return n1 + n2;
// };

// const addAndHandle = (
//   n1: number,
//   n2: number,
//   callback: (num: number) => void
// ) => {
//   const result = n1 + n2;
//   callback(result);
// };

// // let combineValues: Function;
// let combineValues: (a: number, b: number) => number;

// combineValues = add;
// // combineValues = 5;

/////////////////////////////////////////////////
// Unknown Type

// let userInput: unknown;
// userInput = 7;
// userInput = "Max";

/////////////////////////////////////////////////
// Never Type

// const generateError = (message: string, code: number) => {
//   throw { message: message, errorCount: code };
//   // it never returns, it NEVER produces a value (because it crashes because of the throw)
// };

// generateError("An error occurred!", 500);
