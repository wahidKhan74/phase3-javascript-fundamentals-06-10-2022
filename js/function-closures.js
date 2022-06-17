// In JavaScript, a closure is a function that references variables in the outer scope from its inner scope.
// 1. Access global scope
// 1. Access inner function scope
// 1. Access outer function scope

// global variable
let firstName ="John";

// outer function 
function fullName() {

    let middleName = "William";  // outer variable

    // inner function :: nested function :: closure function
    function combine() {
        let lastName  = "Smith"; // inner variable.

        return `${firstName} ${middleName} ${lastName}`;
    }
    return combine();
}


let pincode = 77590;
function fullAddress(state) {
    // innser function
    function combineAdd(city) {
        return `Address : ${city} , ${state} , ${pincode} `;  
    }
    return combineAdd("Houston");
}


let response = fullName();
console.log(response);

console.log("------------------");
let address = fullAddress("Texas");
console.log(address);