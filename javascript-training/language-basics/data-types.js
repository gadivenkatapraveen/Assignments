/*
Data types in javascript are of two different categories.
Primitive data types and Non-primitive data types.
*/

/*********************************/
/****PRIMITIVE DATA TYPE**********/
/*********************************/

//1. number ==> number represents numbers with decimals and without decimals. (without quotes)
let num = 123; // number without decimal
let floatNum = 14.35; // number with decimals
console.log(typeof num); // output: number
console.log(typeof floatNum); // output: number

//2. string ==> string represents text / sequence of characters wrapped inside single or double quotes.
let str1 = 'hello, world!'; //string with single quotes
let str2 = "javascript is fun"; //string with double quotes
console.log(typeof str1); //output: string
console.log(typeof str2); //output: string

//3. boolean ==> boolean represents result of condition : true or false.
let isJavaScriptFun = true; //boolean true
let isSkyGreen = false; //noolean false
console.log(typeof isJavaScriptFun); //output: boolean

//4. undefined ==> undefined represents a variable that has been declared but not assigned a value.
let undefedVar; // variable defined but not assigned a value.
console.log(typeof undefined); //output: undefined.

//5. null ==> Represents the intentional absence of any object value.
let nullVar = null; //variable assigned iwth null.
console.log(typeof nullVar);

//6. symbol ==> symbol represents a unique identifier.

 let countryOfOrigin = Symbol();
 let productInfo = {
    productName: "samsung",
    productPrice: 4558,
    [countryOfOrigin]: "china"
 };

 console.log(productInfo);






/*********************************/
/****NON PRIMITIVE DATA TYPE******/
/*********************************/

//1. object ==> object represents a collection of key-value pairs.
let empdetails={
    empid : 101,
    empName : "johnny",
    havingVisa : true,
    address : {
        city : 'New York',
        zipcode : 100021,
        state :'NY',
        country : "USA"
    }
}

//print employee name
console.log(empdetails.empName);  // output: johnny
//print employee zipcode
console.log(empdetails.address.zipcode);  // output: 100021
//print entire employe details
console.log(empdetails);

//2. array ==> array represents an ordered collection of items.
let fruits = ["Apple", "Banana", "Mango", "Orange"];
let fruitsAndPrices = ["Apple", 120, "Banana", 50, "Mango", 80, "Orange", 150];
let fruitsPricesAndAvailability = ["Apple", 120, true, "Banana", 50, false, "Mango", 80, true, "Orange", 150, false];

console.log(fruitsPricesAndAvailability);

//print banana from fruits array
console.log(fruits[1]); //output: banana
//print price of mango from fruitsAndPrices array
console.log(fruitsAndPrices[5]);
//print availability of orange from fruitsPricesAndAvailability array
console.log(fruitsPricesAndAvailability[8]); //output: true


//3. function ==> function represents a block of code designed to perform a particular task.
function loginToApplication(browserName, URL) {
    console.log("Launch the browser " + browserName);
    console.log("Naviagte to URL: " + URL);
    console.log("Application launched successfully!");

}

//Call the function
loginToApplication("Chrome", "https://www.google.com")



//4. Date ==> Date represents date and time in Javascript.
let currentDate = new Date();

//get current year
console.log(currentDate.getFullYear()); // output: current year

//get month
console.log(currentDate.getMonth() + 1); // output: current month(0-based index, so adding 1)

//get current date
console.log(currentDate.getDate()); // output: current date

console.log(currentDate.getHours()); // output: current hours
console.log(currentDate.getMinutes()); // output: current minutes
console.log(currentDate.getMilliseconds()); // output: current milli seconds


//5. Map ==> Map represents a collection of Key-value pairs where keyas can be of any data type.
let employeeMap = new Map();
employeeMap.set("empID", 101);
employeeMap.set("empName", "John Doe");
employeeMap.set("havingvisa", true);
employeeMap.set("empName", "Bharath");

employeeMap.delete("havingvisa"); // deleting the key havingvisa

// **** Duplicate keyas are not allowed but values are allowed
//get employee name
console.log(employeeMap.get("empName")); // output: Bharath
console.log(employeeMap);
console.log(employeeMap.size); // getting the size of the map


//6. Set ==> Set represents a collection of unique values of any data type.
let uniqueNumbers = new Set();
uniqueNumbers.add(10);
uniqueNumbers.add(20);
uniqueNumbers.add(30);
uniqueNumbers.add(20); // duplicate value, will not be added.
uniqueNumbers.delete(10); //delete value 10

console.log(uniqueNumbers.size); // getting size of the set


console.log(uniqueNumbers);