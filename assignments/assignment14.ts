 let values: number[] = [12,34,11,36,87,98,93]

let firstLargest: number = 2;
let secondLarget: number = 1;
let thirdLargest: number = 0;

for (let i: number = 0;i <= values.length; i++ ){
    let num = values[i];

    if (num > firstLargest){
        secondLarget = firstLargest;
        thirdLargest = secondLarget;
        firstLargest = num;

    } else if (num > secondLarget){
        thirdLargest = secondLarget;
        secondLarget = num;

    } else if (num > thirdLargest){
        thirdLargest = num;
}
}

console.log("Second largest Number is ", secondLarget)
console.log("Third largest Number is ", thirdLargest) 



























































/* //---------------------------------------------Second Method-----------------------------------------------------------------------------
let value: number[] = [12,34,11,36,87,98,93];

for(let i = 0; i < value.length; i++){

    //compairng the value in i with rest of the numbers
    for(let j = i+1; j < value.length; j++){

        if(value[i]<value[j]){
            value[i]= value[i] + value[j]; //46
            value[j]= value[i] - value[j]; //12
            value[i]= value[i] - value[j]; //34
        }

    }
}
console.log("Largest number is ", value[0]);
console.log("Second largest number is ", value[1]);
console.log("Third largest number is ", value[2]);
console.log("Fourth largest number is ", value[3]);
console.log("fifth largest number is ", value[4]);
console.log("Sixth largest number is ", value[5]);
console.log("Seventh largest number is ", value[6]);


export{}


 */