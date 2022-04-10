import expense from '../../assets/cost.png';
import income from '../../assets/income.png';
import './revenueExpenseTotal.scss'

const RevenueExpenseTotal = ({ documents}) => {

    
    let revenueAmontArray = []
    documents.filter((doc) =>{
        if (doc.revenueExpense === "revenue"){
            const revenueAmount = Number(doc.amount);
            
            revenueAmontArray.push(revenueAmount);
        }
        return revenueAmontArray
    })
    
    let expenseAmontArray = []
    documents.filter((doc) =>{
        if (doc.revenueExpense === "expense"){
            const expenseAmount = Number(doc.amount);
            expenseAmontArray.push(expenseAmount);
        }
        return expenseAmontArray
    })

    const findTotal = (array) => {
        const sum = array.reduce( (init, total) =>{
            return init + total
        },0)
        return sum;
    }
    const revenueTotal = findTotal(revenueAmontArray)
    const expenseTotal = findTotal(expenseAmontArray)
    

    return(
        <main className='revenueExpense'>
            <section>
                <figure>
                    <p>Revenue</p>
                    <img src={income} alt="income logo" />
                    {revenueAmontArray.length > 0 ? <p>${revenueTotal}</p>: <p>Null</p>}
                </figure>
                <figure>
                    <p>Expense</p>
                    <img src={expense} alt="expense logo" />
                    {expenseAmontArray.length > 0 ? <p>${expenseTotal}</p>:<p>Null</p> }
                </figure>
            </section>
            <article className='result'>
                <div>
                    {revenueTotal >= expenseTotal ? 
                        <p className='positive'> Your total revenue is <span>${revenueTotal - expenseTotal}</span>.</p>:
                        <p className='negative'> Your total expense is <span>$({revenueTotal - expenseTotal}) </span>.</p>}
                </div>
            </article>
        </main>

    )
}
export default RevenueExpenseTotal;