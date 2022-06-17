// The Function constructor creates a new functional object. 

function Account (id,name,balance,email) {
    this.id = id;
    this.name = name;
    this.balance = balance;
    this.email = email;
}

let account1 = new Account(1001,'John',45454.45, 'john@gmail.com');
let account2 = new Account(1002,'will',45454.45, 'will@gmail.com');
let account3 = new Account(1003,'smith',45454.45, 'smith@gmail.com');
let account4 = new Account(1004,'mike',45454.45, 'mike@gmail.com');
console.log(account1);