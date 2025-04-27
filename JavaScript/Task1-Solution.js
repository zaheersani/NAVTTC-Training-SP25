// Task 1: Declare Variables
// Declare three variables using let, const, and var.
// Assign them any values.
// Print their values using console.log()

let age = 25;
const country = "Pakistan";
var name = "Ali";
console.log(age, country, name);


// Task 2: Identify Data Types
// Create variables with values of the following types:
// - A number
// - A string
// - A boolean
// - undefined
// - null
// - An object
// Print the data type of each variable using typeof

let num = 123;
let text = "Hello";
let isActive = true;
let x; // undefined
let y = null;
let obj = { name: "Sara" };

console.log(typeof num);
console.log(typeof text);
console.log(typeof isActive);
console.log(typeof x);
console.log(typeof y); // Note: typeof null returns "object" due to a JavaScript bug
console.log(typeof obj);


// Task 3: Reassign Variables
// Declare a variable with let.
// Assign it an initial value.
// Reassign it to a new value.
// Try doing the same with a const variable and observe what happens.

let color = "red";
color = "blue"; // Works fine
console.log(color);

const fruit = "apple";
// fruit = "banana"; // Uncommenting this line will throw an error because const variables cannot be reassigned


// Task 4: Practice undefined and null
// Create a variable but do not assign any value.
// Later, assign it the value null.
// Print its value after each step.

let temp;
console.log(temp); // undefined

temp = null;
console.log(temp); // null


// Task 5: Create Different Objects
// Create an object that represents a car.
// It should have properties like brand, model, and year.
// Print the object and the type of object.

let car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2022
};

console.log(car);
console.log(typeof car); // "object"


// Task 6: Boolean Values
// Declare two boolean variables:
// - One representing "Is the user logged in?"
// - One representing "Is the user an admin?"
// Print both variables.

let isLoggedIn = true;
let isAdmin = false;

console.log(isLoggedIn);
console.log(isAdmin);


// Task 7: Bonus Challenge
// Guess the output before running:

console.log(typeof NaN);      // "number"
console.log(typeof null);     // "object" (quirk of JavaScript)
console.log(typeof []);       // "object"
console.log(typeof {});       // "object"
console.log(typeof function() {}); // "function"
