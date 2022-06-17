// object is a key value pair entity 

// 1. Object Literal

let employeeOne  = { 
    id: 1001,
    name: 'John Smith',
    age: 34,
    78: 56565.56,
    true: 'Sales'
};

console.log(employeeOne);


// 2. Object with new Object Constructor
let employeeTwo = new Object({ 
    id: 1002,
    name: 'Mike Smith',
    age: 34,
    salary: 111165.56,
    dept: 'Sales'
});

console.log(employeeTwo);


// 3. Object with Function Constructor
function Employee(id,name,salary,dept,email) {
    this.id = id;
    this.name = name;
    this.salary = salary;
    this.dept = dept;
    this.email = email;
}
let employeetThree = new Employee(1003,'David Smith',89456.567,"HR",'david@gmail.com');
console.log(employeetThree);