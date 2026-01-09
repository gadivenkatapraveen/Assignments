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
let undefedVar; // variable defined but assigned a value.
console.log(typeof undefined); //output: undefined.

//5. null ==> Represents the intentional absence of any object value.
let nullVar = null; //variable assigned iwth null.
console.log(typeof nullVar);

//6. symbol ==> symbol represents a unique identifier.



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



