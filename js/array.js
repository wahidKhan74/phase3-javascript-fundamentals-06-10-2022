let listOfCompanies  = ["Google","Microsoft","Apple","Dell"];

console.log(listOfCompanies);
console.log(listOfCompanies[0]);
console.log(listOfCompanies[3]);
console.log("-----------------");

// iterate over arrays for counter
for (let index = 0; index < listOfCompanies.length; index++) {
    const company = listOfCompanies[index];
    console.log(company);
}

console.log("-----------------");

// iterate over arrays for each helaper
listOfCompanies.forEach((company) => {
    console.log(company);
});

// iterate over arrays for of syntax
console.log("-----------------");
for (const company of listOfCompanies) {
    console.log(company);
}

// iterate over arrays for in syntax
console.log("-----------------");
for (const index in listOfCompanies) {
    const value = listOfCompanies[index];
    console.log(value);  
}