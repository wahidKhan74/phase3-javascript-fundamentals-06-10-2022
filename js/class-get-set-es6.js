// class decleration
class Account {

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

    // get & set methods will be used as property call
    get Id() {  return this.id;  }
    set Id(id) {  this.id = id ;  }

    get Name() {  return this.name;  }
    set Name(name) {  this.name = name ;  }

    get Balance() {  return this.balance;  }
    set Balance(balance) {  this.balance = balance ;  }

    get Email() {  return this.email;  }
    set Email(email) {  this.email = email ;  }
}

let account = new Account();
console.log(account);

// set values
account.Id = 100001;
account.Name ="John Smith";
account.Balance =562356.56;
account.Email ="will.smith@gmail.com";
// console.log(account);

// get values
console.log("Id : ", account.Id);
console.log("Name : ", account.Name);
console.log("Balance : ", account.Balance);
console.log("Email : ", account.Email);

console.log(account);

