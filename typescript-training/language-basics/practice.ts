//example: Print the name Bharath for 10 times using for loop

//for(contionToStrat; conditionToENd; increment/decrement);
let name: string = 'praveen';


for (let i: number = 1; i <=10; i++) {
    console.log(i + " " + name);
}



//while{condition}

//example: Refresh the page until the application is launched successfully. 

let refreshCount : number = 1;

while(refreshCount > 0){
    let isPageLoaded: boolean = false; //assume this value is coming from application
    if(isPageLoaded || refreshCount == 10) {
        console.log("maximum refresh completed");
        break;
    }
    console.log("refresh page");
    refreshCount++
}


//3.do..while loop (special type of while loop)
let i:number =0;
// while(i>0){
//     console.log("Bharath Reddy");
//     i++;
// }

// do{
//     console.log("Bharath Reddy");
//     i++;
// }while(i>0);


//4.for..of loop : Iterate over each and every value of the predefined list (array,set,map)
//let fruits: string[] = ["Apple", "Banana", "Mango", "Orange"];

let fruits: string[] = ["banana", "mango", "grapes", "orange" ];

//traditionl for loop

for(let i: number =  0; i < fruits.length; i++)
{
    console.log(fruits[2]);
}

//for..of loop
//syntax:
//for (variable of pre-defined-list)
{
    //statements
}

for (let abc of fruits){
    console.log(abc);
}

//Map
let employeeMap:Map<string,string> = new Map();
employeeMap.set("empId", "101");
employeeMap.set("empName", "John Doe");
employeeMap.set("havingVisa", "true");
employeeMap.set("empName", "Bharath");

employeeMap.keys();
employeeMap.values();

for(let empDetail of employeeMap){
    console.log(empDetail);
}


//5.for..in loop : Iterate over each and every key of the predefined object

//object ==> object represents a collection of key-value pairs.

interface empDetails {
    empId: number ,
    empName: string,
    havingVisa: boolean,
    address: {
        city: string,
        zipCode: number,
        state: string,
        country: string
    }
}

let empinfo:empDetails = {
    empId: 101,
    empName: "John Doe",
    havingVisa: true,
    address: {
        city: "New York",
        zipCode: 10001,
        state: "NY",
        country: "USA"
    }
};

console.log(empinfo.empId);
console.log(empinfo["empId"]);


//syntax:
//for (key in pre-defined-object)
{
    //statements
}

for (let key in empinfo) {
    console.log(key);
    console.log(empinfo[key as keyof empDetails]);
}

//break
for(let i=1; i<=8; i++) {
if (i == 7){
    break;
}
console.log(i);
} 


//continue
for(let i=1; i<=8; i++) {
if (i == 7){
    continue;
}
console.log(i);
} 

//return
function sumOfNum(a:number, b:number):number {
return a+b;

console.log("sum of a & b is "); /// will not be executed as we have used return
}

let sum: number = sumOfNum(5,5);
console.log("sum ", sum);


/*function getFullNamefullName(firstName: string, lastName: string):string {
let fullName: string = (firstName + " " + lastName);
    console.log("Full Name is ", fullName);
}

getFullNamefullName('praveen', 'gadi'); */

//throw statement: It is used to throw an exception when an error occurs.
function bankBalance(a:number){
    if (a<=0){
        throw new Error("low balance in the account: ");
       
    }
    console.log("amount withdrawn is ", a);
}

bankBalance(10);

