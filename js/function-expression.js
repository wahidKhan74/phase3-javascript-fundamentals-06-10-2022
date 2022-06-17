// A function expression is  a syntax to declare a function with assignment to varaible.
// function expression : 1) Labled function expression 2) Anonymous function expression
// function expression is not hoisted.

// syntax :
// let variableName = function functionName(x, y) { statements... return (z) };

// x();  // Uncaught ReferenceError: Cannot access 'x' before initialization

// 1) Labled function expression
let x = function showMessage() {
    let message = "Welcome to javascript.";
    console.log(message);
    return 0;
}

// showMessage();  // Uncaught ReferenceError: showMessage is not defined
// console.log(x);

x();

// 2) Anonymous function expression

let y = function () {
    let message = "Hello to javascript.";
    console.log(message);
    return 0;
}

// console.log(y);
y();
