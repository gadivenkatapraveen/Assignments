/* // Base value (x) and exponent (n) are initialized
let x: number = 10;   // Base number
let n: number = -2;    // Exponent (can be positive, negative, or zero)

//start with default result of 1
let result: number = 1; // Variable to store the final result of x^n

// Case when exponent is 0: x^0 is always 1
if (n === 0) {
    result = 1;
}

// Case when exponent is negative:
// Convert the base to its reciprocal and make the exponent positive
if (n < 0) {
    x = 1 / x;   // Inverse the base
    n = -n;      // Make exponent positive
}

// Multiply the base 'x' with itself 'n' times
for (let i: number = 0; i < n; i++) {
    result = result * x;
}

// Print the final result of x raised to the power n
console.log(result);

export {}; */

/* let newEmpName: any; //declearing a variable
try {
    console.log(newEmpName.toLowerCase())
} catch (error) {
    console.log("An exception occurred. Please check the variable.");
    console.log(newEmpName.toUpperCase())
} finally{
    console.log("Execution is Completed"); //This block will always execute
} */

/*     function greetThePerson(name: string): string {
  return "Hello, "+name+"! Good Morning.";
}

let greet = greetThePerson("praveen")

console.log(greet)

for(let i:number = 1; i <= 5; i++) {
    console.log(i);} */


class employee{
    private empName: string = 'praveen';
    private empId: number = 123456;
    private empSalary: number = 85000;

     //public setter & getter methods
    
     public setName(name:string): void{
        this.empName = name;
        
     }

     public getName(): string{
        return this.empName 
     }

      public setId(id:number): void{
        this.empId = id;
        
     }

     public getId(): number{
        return this.empId 
     }

     public setSalary(salary : number): void{
         this.empSalary = salary;

     }

     public getSalary(): number {
        return this.empSalary
     }

}


let obj1 = new employee();

obj1.setName("swetha");
obj1.setId(123456);
obj1.setSalary(85002);

console.log("Employe Name is ", obj1.getName());
console.log("Employe id is ", obj1.getId());
console.log("Employe salary is ", obj1.getSalary());
//console.log(obj1.getName())





