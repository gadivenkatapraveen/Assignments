/*
Data types in javascript are of two different categories.
Primitive data types and Non-primitive data types.
*/

/*********************************/
/****PRIMITIVE DATA TYPE**********/
/*********************************/

//1. number ==> number represents numbers with decimals and without decimals. (without quotes)
let marks: number = 99;
let percentage: number = 98.9;

console.log("Marks: ", marks);
console.log("percenatge: ", percentage);

//2. string ==> string represents text / sequence of characters wrapped inside single or double quotes.
let name1:string ="praveen"; //double quotes
let name2:string ='praveen'; //single quotes
let name3:string =`praveen`; //backticks

console.log("Name1: ", name1);
console.log("Name2: ", name2);
console.log("Name3: ", name3);

//3. boolean ==> boolean represents result of condition : true or false.
let visaStatus:boolean = true;
let isGraduated:boolean = false;

console.log("Visa status: ", visaStatus);
console.log("Is Graduated: ", isGraduated);

//Union of types ( | ) ==> Variables can store more than one type of data.
let empAddress : string | number | boolean;
empAddress = "vizag";
empAddress = "530032";
console.log("Employee Address: ", empAddress);

//4. Undefined ==> undefined represents a variable that has been declared but not assigned with any value
let empSalary: undefined | number;
// empSalary = 599999;
console.log("Emplyee Salary: ", empSalary);

//5. null ==> null represents a variable that is assigned with a null value.
let empRole : null | string;
empRole = null;
empRole = 'Developer';
console.log("EMployee Role: " + empRole);
console.log("EMployee Role: ", empRole);


/*********************************/
/****NON PRIMITIVE DATA TYPE******/
/*********************************/

//1. Array ==> Array represenst a collection of similar data types.
let fruits: string[] = ["Apple","Banana","Mango","Orange"];
console.log("Fruits: ", fruits);

let scores: number[] = [54,65,98,78];
console.log("Scores: ", scores);

//fruit names along with their prices in array.
let fruitDetails: (string | number)[] = ["Apple",45,"Banana",85,"Mango",85,"Orange",25];
console.log("Fruit Details: ", fruitDetails);

//2. Object ==> object represents a collection of key-value pairs

interface empDetails  {
    empID: number,
    empName: string,
    havingVisa: boolean,
    address: {
        city: string,
        zipCode: number,
        state: string,
        country: string,
    }
}

let empinfo:empDetails = {
    empID: 143,
    empName: "praveen",
    havingVisa: false,
    address: {
        city: "hyderabad",
        zipCode: 545450,
        state: "Telangana",
        country: "India",
    }
}

console.log("Employe Details: ", empinfo.empName);
console.log("Employe Details: ", empinfo.address.country);

//3. tuple ==> tuple is a collection of different data types in a specific order.
let address: [string,string,number] = ["548 donbosco street","venuzula",658858];
console.log("Address: ", address);

//4. function ==> function represents a block of code that performs a specific task.
//void represents a function that does not return any value.
// if function returns any value then the same data type should be mentioned in the function definition.
function launchTheApplication(browserName: string, url: string):void {
    console.log("launch the browser: " + browserName);
    console.log("Navigate to url: " + url);
    console.log("Application launched successfully");

}

function sumOfNumbers(num1: number, num2: number): number {
    let num3:number = num1 + num2;
    return num3;
}

function getFullName(firstName: string, lastName: string): string {
    let fullName: string = firstName + " " + lastName;
    return fullName;
}

launchTheApplication("chrome", "https://www.google.com");
console.log("Sum of Numbers: ", sumOfNumbers(10,30));
console.log("Full Name: ", getFullName("praveen","Gadi"));

//5. Map ==> Map represents a collection of Key-value pairs where keys can be of any data type.
let employeeMap:Map<string,string> = new Map();
employeeMap.set("empID", "101");
employeeMap.set("empName", "praveen");
employeeMap.set("havingVisa", "true");
employeeMap.set("empName", "bharath");
employeeMap.delete("havingVisa"); //deleting key having Visa

console.log("Employee Map: ", employeeMap);


//6. Set ==> Set represnts a collection of unique values of any data type.
let uniqueNumbers:Set<number> = new Set();
uniqueNumbers.add(10);
uniqueNumbers.add(20);
uniqueNumbers.add(30);
uniqueNumbers.add(20); // duplicate value , will not be added.
uniqueNumbers.delete(10); // deleting value 10

console.log(uniqueNumbers.size) //getting size of the set
console.log(uniqueNumbers);

//7. any ==> any represents a variable that can hold any type of data.(not recommended to use)
//it will remove all the type-checking benefits providd by TypeScript.
let randomValue: any;
randomValue = 100;
console.log("Random Value (number): ", randomValue);
randomValue = "Hello World";
console.log("Random Value (string): ", randomValue);
randomValue = true;
console.log("Random Value (boolean): ", randomValue);





 