

//Input: x = 2.00000, n = 10
/* let x: number = 2.00000;
let n: number = 10 

console.log(`${x} Power of ${n} is `,  (x**n).toFixed(5)); */

//Input: x = 2.10000, n = 3
/* let x: number = 2.10000;
let n: number = 3;

console.log(`${x} Power of ${n} is `,  (x**n).toFixed(5)); */

//Input: x = 2.00000, n = -2
/* let x: number = 2.00000;
let n: number = 0;

   console.log(`${x} Power of ${n} is `,  (x**n).toFixed(5));


   export{} */

//----------------------------------------------------------------------------------------------------------------------------------
 /* let x: number = 2; //base
let n: number = -2; // exponent

let result: number = 1;

if (n==0){
   result = 1;
}

if (n<0){
   x = 1/x;
   n = -n;
}

for(let i: number = 1; i <= n; i++){
   result = result * x;

}

console.log(result);

export{} 
 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/

// Base value (x) and exponent (n) are initialized
let x: number = 10;   // Base number
let n: number = 2;    // Exponent (can be positive, negative, or zero)

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

export {};