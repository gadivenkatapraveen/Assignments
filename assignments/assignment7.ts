
// Array representing the stock prices over different days
// Each element corresponds to the price of the stock on that day
let prices: number[] = [7, 1, 5, 3, 6, 4];
//let prices: number[] = [7,6,4,3,1]

// Variable to store the maximum profit observed so far
let maxProfit: number = 0;

// Variables to store the best day to buy and sell the stock (1-based index)
let buyDay: number = 0;
let sellDay: number = 0;

// Outer loop: pick each day as a potential buying day
for (let i: number = 0; i < prices.length-1; i++){

    // Inner loop: pick each subsequent day as a potential selling day
    for (let j: number = i + 1; j < prices.length; j++){

        // If this profit is greater than the current maximum profit
        let profit: number = prices[j]-prices[i];

        if(profit > maxProfit){
            // Update maxProfit with the new higher profit
            maxProfit = profit;

            // Update buyDay and sellDay (convert to 1-based index)
            buyDay = i + 1;
            sellDay = j + 1;
        }

    }
}

// Print result
if (maxProfit>0){
    console.log("Max Profit is ", maxProfit);
    console.log("Buy the stock on day ", buyDay);
    console.log("Sell the stock on day ", sellDay);
} else {
    console.log("Do not buy any stocks, you will loose your money")
}






   

/*
//let marketPrices: number[] = [7,6,4,3,1]
let marketPrices: number[] = [7,1,5,3,6,4]

function maxProfits(prices: number[]): void {
    let minPrice: number = prices[0]; //Assuming min price is 1st value in array;
    let maxPrice: number = 0;//Assuming max price is 0;

    for (let i: number = 0; i <= prices.length;i++){

        if (prices[i] < minPrice){
            minPrice = prices[i];
        } else {
                let profit: number = prices[i]-minPrice;// calculate profit
                if (maxPrice < profit){
                    maxPrice = profit;  
                }
        }

    } console.log("Profit is ", maxPrice);
    
    
}


//calling
maxProfits(marketPrices);

*/