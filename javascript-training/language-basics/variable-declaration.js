// variable decalartion will vary based on 4 paramters

//1. Inistaialization
//2. reassignment
//3. redeclaration
//4. scope (block scope {})

//1. Inistaialization
const a = 10; // must be initialized
let b; // can be initialized later
var c; // can be initialized later

//2. reassignment
//a=15; //Error: Assignment to constant variable.
b = 20; // valid

//3. redeclaration
//const a =123; //Error: Identifier 'a' has already been declared
//let b =30; //Error: Identifier 'b' has already been declared
var c = 40; // valid

//4.scope

{
    const x = 50;
    let y = 60;
    var z = 70;
    console.log(x); //valid
    console.log(y); //valid
    console.log(z); //valid
}

//console.log(x); //Error: x is not defined
//console.log(y); //Error: y is not defined
console.log(z); //valid

