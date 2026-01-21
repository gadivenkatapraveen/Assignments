

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

