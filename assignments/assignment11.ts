let sentence: string = "Java programming is fun and challenging";

//Count the total number of words in the sentence.
let stringParts: string[] = sentence.split(' ');
console.log("splitted string is ", stringParts);
console.log("Total number of words in the sentence are ", stringParts.length);

//Print the sentence words in reverse order.
let reversedString: string = ""
for(let i: number = stringParts.length-1; i>=0; i--){
    reversedString += stringParts[i] + " ";
}
    console.log("Reversed sentence is :", reversedString);


//Print the 1st character of each word in upper case
let upperCaseString:string = ""
for(let word of stringParts){
    upperCaseString = upperCaseString + word.substring(0, 1).toUpperCase() + word.substring(1) + " ";
      
}
console.log("Uppercase Sentence is : " + upperCaseString);
//console.log("Uppercase Sentence is : " + upperCaseString.trim());

export{}

//---------------------------------Other Method----------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------

const sentence1: string = "Java programming is fun and challenging";

const words: string[] = sentence1.split(" ");

// Count the words
console.log("Total words in the sentence are " + words.length);

// Print sentence in reverse order of words
let reverseSentence: string = "";
for (let i: number = words.length - 1; i >= 0; i--) {
    reverseSentence = reverseSentence + words[i] + " ";
}
console.log("Reverse Sentence is : " + reverseSentence.trim());

// Print each word of sentence with first letter in upper case
let uppercaseSentence: string = "";
for (const word of words) {
    uppercaseSentence =
        uppercaseSentence +
        word.substring(0, 1).toUpperCase() +
        word.substring(1) +
        " ";
}
console.log("Uppercase Sentence is : " + uppercaseSentence.trim());

export {};