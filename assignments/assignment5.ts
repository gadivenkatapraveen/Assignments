// Map<employeeName, [baseSalary, experience, rating]>

//Storing employee data
let empinfo: Map<string, number[]> = new Map();
empinfo.set("Alice Johnson", [75000, 5.1, 4.2]);
empinfo.set("Bob smith", [68000, 3.2, 3.8]);
empinfo.set("Carol Davis", [82000, 7, 4.5]);
empinfo.set("David Brown", [90000, 10, 2.0]);
empinfo.set("Eva Green", [60000, 2, 3.5]);

//empty Map to store Hike percentage.
let hikeMap: Map<string, number> = new Map();

// Calculate hike for each employee and store in hikeMap
for (let key of empinfo.keys()){
    let data = empinfo.get(key)!;
    let baseSalary = data[0];
    let experience = data[1];
    let rating = data[2];
    
let hikePercentage: number = calculateHike(baseSalary, experience, rating);

hikeMap.set(key, hikePercentage);

}

console.log("Hike Percentage for each employee:");
console.log(hikeMap);


// Function to calculate hike percentage.
function calculateHike(baseSalary: number, experience: number, rating: number): number {
    let variablePayPercentage: number = 0;
    let bonus: number = 0;
    let reward: number = 0; 

    if (rating >= 4.0){
        variablePayPercentage = 15;
        bonus = 1500;
    } else if (rating >= 3.0){
        variablePayPercentage = 10;
        bonus = 1200;
    } else variablePayPercentage = 3;
        bonus = 300;

    if(experience > 5){
        reward = 5000;
    }

    let hike:number =  (baseSalary * variablePayPercentage) / 100 + bonus + reward;

    return (hike / baseSalary) * 100;
}

export{}