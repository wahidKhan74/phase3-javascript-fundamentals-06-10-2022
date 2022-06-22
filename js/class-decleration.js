// A JavaScript class is a blueprint for creating objects.
// A class encapsulates data and functions that manipulate data.
// Just like functions, classes can be defined as class decleration or expression syntax

// class decleration
class Account {

    // data members
    id;
    name;
    balance;
    email;

    // constructor  : only one constructor per class
    constructor(id, name, balance, email) {
        this.id = id;
        this.name = name;
        this.balance = balance;
        this.email = email;
    }

    //member function 
    showBalance() {
        return this.balance;
    }

    depositAmount(amount) {
        return this.balance += amount ;
    }

    withdrawAmount(amount) {
        return this.balance -= amount ;
    }

}

let account1 = new Account(10001, "John  Smith");
console.log(account1);
console.log("Id : ", account1.id);
console.log("Name : ", account1.name);
console.log("Balance : ", account1.balance);
console.log("Email : ", account1.email);
console.log("The balance :" , account1.showBalance());


console.log("----------------------");
let account2 = new Account(10001, "John  Smith", 400044.44, "john.smith@gmail.com");
console.log(account2);
console.log("Id : ", account2.id);
console.log("Name : ", account2.name);
console.log("Balance : ", account2.balance);
console.log("Email : ", account2.email);
console.log("The balance :" , account2.showBalance());
console.log("After deposit The balance :" , account2.depositAmount(100000));
console.log("After withdraw The balance :" , account2.withdrawAmount(100000));