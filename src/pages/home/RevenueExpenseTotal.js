

const RevenueExpenseTotal = ({ documents}) => {

    let revenueAmontArray = []
    documents.filter((doc) =>{
        if (doc.revenueExpense === "revenue"){
            const revenueAmount = parseInt(doc.amount);

            revenueAmontArray.push(revenueAmount);
        }
        return revenueAmontArray
    })

    let expenseAmontArray = []
    documents.filter((doc) =>{
        if (doc.revenueExpense === "expense"){
            const expenseAmount = parseInt(doc.amount);
            expenseAmontArray.push(expenseAmount);
        }
        return expenseAmontArray
    })

    return(

        <div>
        
        </div>

    )
}
export default RevenueExpenseTotal;