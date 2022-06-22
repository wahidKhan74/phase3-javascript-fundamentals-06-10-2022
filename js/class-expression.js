// class expression
let Employee  = class  {

    // data members
    id;
    name;
    salary;
    email;

    // constructor
    constructor(id, name, salary, email) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.email = email;
    }

    // member functions
    showSalary() {
        return this.salary;
    }

    increament(amount) {
        return this.salary += amount;
    }

    decreamnet(amount) {
        return this.salary -= amount;
    }
}

// create employee objet
let employee = new Employee(10001, "John Smith", 45646.56, 'john.smith@gmail.com');

console.log(employee);

console.log("--------------");
console.log("id :" , employee.id);
console.log("name :" , employee.name);
console.log("salary :" , employee.salary);
console.log("email :" , employee.email);
console.log("--------------");

console.log("The salary :" , employee.showSalary());
console.log("After Increament :" , employee.increament(20000));
console.log("After decrement :" , employee.decreamnet(10000));