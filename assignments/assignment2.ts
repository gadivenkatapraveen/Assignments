// 1. Temperature of a city in degrees Celsius: 25.5
let cityTemperature: number = 25.5;
console.log("City Temperature: " + cityTemperature);

//2. Whether a customer has placed an order: true or false
let orderPlaced1: boolean = false;
let orderPlaced2: boolean = true;
console.log("customer placed the order: " + orderPlaced1);
console.log("customer placed the order: " + orderPlaced2);


//3. Person's phone number: "123-456-7890"
let personPhoneNum: string = "123-456-7890";
console.log("phone number of the person is " + personPhoneNum);

//4. Amount of money in a customer's bank account: 1000.50
let moneyAvailableInAccount: number = 1000.50;
console.log("custsomer has " + moneyAvailableInAccount + " money in his bank account");

//5. Person's email address: "john.doe@example.com"
let emailId: string = "john.doe@example.com";
console.log("persons email id is "+emailId);

//6. Coordinates of a location (latitude, longitude): 37.7749, -122.4194

interface Coordinates {
    latitude: number,
    longitude: number,
}

let coordinates: Coordinates = {
    latitude: 37.7749,
    longitude: -122.4194,

}

console.log("Cooridnates are ", coordinates.latitude, ",", coordinates.longitude);


//7.Person's marital status: true or false
let maritalStatusOfPerson1: boolean = true;
let maritalStatusOfPerson2: boolean = false;
console.log("marital status of a person1 is " + maritalStatusOfPerson1 );
console.log("marital status of a person1 is " + maritalStatusOfPerson2 );

//8. Person's occupation: "Software Engineer"
let occupation: string = 'Softaware Engineer';
console.log("person is working as a " + occupation);

//Person's favourite colour: "Blue"
let personFavColour: string = "Blue";
console.log("perso's favourite colour is ", personFavColour);

//10.Current year: 2023
let currentYear: number = 2023
console.log("current year is ", currentYear);

//11.Number of followers on a social media platform: 1,000,000
let numOfFollowersOnSocialMedia: string = '1,000,000';
console.log("Number of followers on a social media platform: ", numOfFollowersOnSocialMedia);

//12.Rating of a movie: 7.5
let movieRating: number = 7.5;
console.log("Rating of a Movie is ", movieRating);

//13.Person's blood type: 'A'
let bloodGroup: string = 'A';
console.log("Persons blood type is " + bloodGroup);

//14.Title of a book: "To Kill a Mockingbird"
let booksTitle: string = "\"To Kill a Mockingbird\""; //include double quotes in the value. use a \ to escaspe "
//console.log("The books Title is " + "\"" + booksTitle + "\""); // to include double quotes while printing.
console.log("The books Title is "+ booksTitle);

//15.Number of employees in a company: 500
let numOfEmployees: number = 500;
console.log("the company has " + numOfEmployees + ' Employees');

//16.Time of an event: 2:30 PM
let timeH: number = 2;
let timeM: number = 30;
let timePeriod: string = 'PM';
console.log("Event time is " + timeH + "\:" + timeM + " " + timePeriod);

let time: string = "2:30 PM"
console.log("Event time is", time);

//17.Name of a country: "United States"
let countryName: string = "\"United States\"";
console.log("Name of a country is ", countryName);

//18.Person's eye color: "Brown"
let eyeColor: string = "Brown";
console.log("Person's eye color is ", eyeColor);

//19.Person's birthplace: "New York City"
let birthPlace: string = "New York City";
console.log("Person's birthplace is ", birthPlace);

//20. Distance between two cities: 200.5
const distanceBtwCities: number = 200.5;
console.log("Distance between two cities is "+ distanceBtwCities );

console.log("Distance between two cities is",distanceBtwCities );


export{}




