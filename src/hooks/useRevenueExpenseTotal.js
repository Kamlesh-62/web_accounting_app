export const useRevenueExpenseTotal = (documents) => {

    // Will filter revenue number from array and make new array
    let revenueAmontArray = []
    if(documents){
        documents.filter((doc) => {
            if (doc.revenueExpense === "revenue") {
                const revenueAmount = Number(doc.amount);
    
                revenueAmontArray.push(revenueAmount);
            }
            return revenueAmontArray
        })
    }else{
        return;
    };

    // Will filter expense number from array and make new array
    let expenseAmontArray = []
    if(documents){
        documents.filter((doc) => {
            if (doc.revenueExpense === "expense") {
                const expenseAmount = Number(doc.amount);
                expenseAmontArray.push(expenseAmount);
            }
            return expenseAmontArray
        })
    }else{
        return;
    };

    // reduce function for total of array
    const findTotal = (array) => {
        const sum = array.reduce((init, total) => {
            return init + total
        }, 0)
        return sum;
    };

    return{revenueAmontArray, expenseAmontArray, findTotal};
}