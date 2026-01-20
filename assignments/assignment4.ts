//Array of transactions. Positive value refers Credit and Negative refers Debit Transaction
const transactions: number[] = [50000, -2000, 3000, -15000, -200, -300, 4000, 3000];

// Variables to store the count and amount of credits / debits
let totalDebitTransactions: number = 0;
let totalCreditTransactions:number = 0;
let totalDebitAmount: number = 0;
let totalCreditAmount: number = 0;
let suspeciousTransactionsCount: number = 0;

for(let amount of transactions) {
    if (amount>0){
        //credit transactions
        totalCreditAmount += amount;
        totalCreditTransactions++;

        //suspecious credit transactions
        if(amount>10000){
            console.log("Suspecious credit transaction detected for amount: ", amount);
            suspeciousTransactionsCount++;
           
        }
    } else {
        //debit transaction
        totalDebitAmount += amount;
        totalDebitTransactions++

        //suspecious debit transactions
        if(amount < -10000){
            console.log("Suspecious debit transaction detected for amount: ", amount);
            suspeciousTransactionsCount++;
        }
    }

}

//Balance Amount

const balanceAmount: number = totalCreditAmount + totalDebitAmount

//final account info
console.log("Remaining balance in the account is ", balanceAmount);
console.log("Total Credit Amount is ", totalCreditAmount);
console.log("Total Debit Amount is ", totalDebitAmount);
console.log("Total number of Credit transactions are ", totalCreditTransactions);
console.log("Total number of Debit transactions are ", totalDebitTransactions);
console.log("Total number of Suspecious transactions are ", suspeciousTransactionsCount);


export{}

