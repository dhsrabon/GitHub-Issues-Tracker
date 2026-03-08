## Difference between `var`, `let`, and `const`

In JavaScript, `var`, `let`, and `const` are used to declare variables, but they behave differently.

- **var**: Function-scoped. It can be **redeclared** and **updated**.
- **let**: Block-scoped. It can be **updated** but **cannot be redeclared** in the same scope.
- **const**: Block-scoped. It **cannot be reassigned** after declaration and must have an initial value.

Example:

```js
var a = 10;
var a = 20; // allowed

let b = 10;
b = 20; // allowed

const c = 10;
// c = 20; // not allowed

## ## What is the spread operator (`...`)?

The **spread operator (`...`)** is used to expand elements of an array or object into individual values. It is commonly used to copy or merge arrays and objects.

Example:

```js
const arr = [1, 2, 3];
const newArr = [...arr, 4, 5]; // [1,2,3,4,5]

const user = { name: "Srabon" };
const updatedUser = { ...user, age: 26 };
## Difference between map(), filter(), and forEach()

- **map()**: Creates a **new array** by transforming each element.
- **filter()**: Creates a **new array** with elements that match a condition.
- **forEach()**: Loops through each element but **does not return a new array**.

Example:

```js
const numbers = [1,2,3,4];

numbers.map(n => n * 2);      // [2,4,6,8]
numbers.filter(n => n > 2);   // [3,4]
numbers.forEach(n => console.log(n)); // prints each number
## What is an arrow function?

##4
An **arrow function** is a shorter way to write a function in JavaScript using the `=>` syntax. It makes code cleaner and is commonly used in modern JavaScript.

Example:

```js
const greet = name => `Hello ${name}`;
##5## What are Template Literals?

**Template literals** are strings written using backticks (`` ` ``) instead of quotes. They allow you to insert variables and expressions directly inside a string using `${}`.

Example:

```js
const name = "Tanim";
const message = `Hello ${name}`;