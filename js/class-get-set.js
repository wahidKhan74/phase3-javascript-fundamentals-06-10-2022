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

    // get & set methods
    getId() {  return this.id;  }
    setId(id) {  this.id = id ;  }

    getName() {  return this.name;  }
    setName(name) {  this.name = name ;  }

    getBalance() {  return this.balance;  }
    setBalance(balance) {  this.balance = balance ;  }

    getEmail() {  return this.email;  }
    setEmail(email) {  this.email = email ;  }
}

let account = new Account();
console.log(account);

// set values
account.setId(100001);
account.setName("John Smith");
account.setBalance(562356.56);
account.setEmail("will.smith@gmail.com");
// console.log(account);

// get values
console.log("Id : ", account.getId());
console.log("Name : ", account.getName());
console.log("Balance : ", account.getBalance());
console.log("Email : ", account.getEmail());

console.log(account);

