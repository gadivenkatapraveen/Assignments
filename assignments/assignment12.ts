let paragraph:string = "Java is a popular programming language. Java is used for web development, mobile applications, and more."

//Find total number of occurrences of “Java” word in the paragraph
//Print count and Indexes of the Java word

let splitParagraph:string[] = paragraph.split(" ");
console.log("Splitted paragraph is : ", splitParagraph);

let javaCount:number = 0
for (let i:number = 0; i<=splitParagraph.length; i++){
    if (splitParagraph[i] === "Java"){
        console.log("Java word is present at index ", i);
        javaCount += 1
        //javaCount++
    }
    }

console.log("Total repetations of Java word is: ", javaCount);


/*

const paragraph: string =
    "Java is a popular programming language. Java is used for web development, mobile applications, and more.";

const words: string[] = paragraph.split(" ");

// Get total count and index of 'Java' words
let count: number = 0;

for (let i: number = 0; i < words.length; i++) {
    if (words[i].toLowerCase() === "java") {
        console.log("Java word is present in Array with Index : " + i);
        count++;
    }
}

console.log("Total words with Java are : " + count);
*/


export {};
