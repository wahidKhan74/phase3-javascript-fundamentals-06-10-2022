
// function callback  ->  When we pass a function as an argument to another function.
let x = function() {
    console.log("X function is executed.");
    return 0;
}

let y = function(callback) {
    console.log("Y function is executed.");
    // console.log(callback);
    callback();
}

// console.log(x);
// console.log(y);
// x function is callback
y(x);


y(function() {
    console.log("Annonymous function is executed.");
    return 0;
});