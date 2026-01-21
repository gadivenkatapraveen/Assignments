// A Prime number is a number greater than 1
// that is divisible only by 1 and itself.
// Prime numbers start from 2.
// Example: 2, 3, 5, 7, 11, ...

let testNum: number = 97 ;
let isPrime: boolean = true;

if (testNum <=1){

    isPrime = false;

} else {

    for(let i: number = 2; i < testNum; i++ ){

    if (testNum % i === 0){
        isPrime = false;
        break;
    }
} 
}

if (isPrime){
    console.log(testNum , "is a prime number");
} else console.log(testNum , "is NOT a prime number");