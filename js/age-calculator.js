let calculateAge = function calculate(yearOfBirth) {
    let currentYear = 2022;
    let age = currentYear-yearOfBirth;
    console.log(`The user age is : ${age}`);
    return age;
}

// console.log(calculateAge);
// calculate(1990);  // Uncaught ReferenceError: calculate is not defined
calculateAge(1990);
calculateAge(1998);
calculateAge(1980);
console.log("----------------------");

let calculateRetirement = function(yearOfBirth) {
    let age = calculateAge(yearOfBirth);
    if(age>60) {
        console.log(`The user is retired.`);
    } else {
        console.log(`The user have ${60-age} remaining year for retirement`);
    }
    return 60-age;
}


calculateRetirement(1990);
calculateRetirement(1980);