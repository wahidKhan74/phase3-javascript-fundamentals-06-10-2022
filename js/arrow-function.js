//  An arrow function expression is a compact alternative to a traditional function expression syntax.
//  Arrow functions were introduced in ES6.
//  Arrow functions allow us to write shorter function

let showMessage = () => {
    console.log("Hello , Arrow Function.");
}
showMessage();

let calculateAge = (yearOfBirth) => {
    let currentYear = 2022;
    let age = currentYear-yearOfBirth;
    console.log(`The user age is : ${age}`);
    return age;
}

calculateAge(1980);

let canVote  = (username,yearOfBirth) => {
    let age = calculateAge(yearOfBirth);
    if(age > 18){
        console.log(`Hello user ${username}, you can vote.`);
    } else {
        console.log(`Hello user ${username}, you cannot vote.`);
    }
}

console.log("----------------------");
canVote("Mikesmith",1970);
canVote("Johnsmith",2021);

console.log("----------------------");

let calculateRetirement = (yearOfBirth) => {
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