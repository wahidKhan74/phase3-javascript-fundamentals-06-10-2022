let calculator = function(num1, num2, callback) {
    return callback(num1, num2);
};

// addition
let add = function(num1, num2) {
    return num1 + num2;
}

// substraction
let sub = function(num1, num2) {
    return num1 - num2;
}

// multiplication
let mul = function(num1, num2) {
    return num1 * num2;
}

// division
let div = function(num1, num2) {
    return num1 / num2;
}

// avg
let avg = function(num1, num2) {
    return (num1 + num2) / 2;
}



let x = 1000;
let y = 500;

var response = calculator(x,y, add);
console.log(`Addition : ${x} + ${y} = ${response}`);
console.log(`Substraction  : ${x} - ${y} = ${calculator(x,y, sub)}`);
console.log(`Multipliaction  : ${x} * ${y} = ${calculator(x,y, mul)}`);
console.log(`Division  : ${x} / ${y} = ${calculator(x,y, div)}`);
console.log(`Averge  : ${x} & ${y} = ${calculator(x,y, avg)}`);
