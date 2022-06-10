// 1. A JavaScript function is a block of code designed to perform a particular task.
// 2. A JavaScript function is executed when "something" invokes it (calls it).
// 3. Functions are one of the fundamental building blocks in JavaScript. 


// function decleration  or function definition
// syntax : function functionName(prameters) {  // body   }

//1. Non parametrised function
function showMessage(){
    let message = "Welcome to javascript.";
    console.log(message);
    console.log("Hello, Today is a good day.");
}

//2. One parametrised function
function displayMessage(message) {
    console.log("Message, ", message);
}

//3. Multi parametrised function
function fetchUser(name,age,gender) {
    console.log(`The user ${name} and its age ${age} and gender ${gender}`);
 }


fetchUser();
fetchUser("John");
fetchUser("John",50);
fetchUser("John", 50, "male");

// Default Prametrised function
function getInfo(username="user", phone=10101010, email="user@gmail.com") {
    console.log(`The user : ${username} 
    and its phone number : ${phone} 
    and email : ${email}`);
}

getInfo();
getInfo("John Snow");
getInfo("John Snow",534545656);
getInfo("John Snow",534545656, "john.snow@gmail.com");

// function calling
// showMessage();

// displayMessage("Hi,Today is a 'Greate' day.");
// displayMessage(1000);
// displayMessage(true);
// displayMessage();
// displayMessage("Hi",false);

