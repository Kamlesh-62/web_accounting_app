import expense from '../../assets/cost.png';
import income from '../../assets/income.png';
import './revenueExpenseTotal.scss'
import { useRevenueExpenseTotal } from '../../hooks/useRevenueExpenseTotal';

const RevenueExpenseTotal = ({documents}) => {

    const { revenueAmontArray, expenseAmontArray, findTotal } = useRevenueExpenseTotal(documents);

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
                    {revenueTotal === 0 && expenseTotal === 0 ? 
                    <p> Your total balace is 0.</p> :
                    revenueTotal >= expenseTotal ? 
                    <p className='positive'> Your total revenue is <span>${revenueTotal - expenseTotal}</span>.</p>:
                    <p className='negative'> Your total expense is <span>$({revenueTotal - expenseTotal}) </span>.</p>}
                </div>
            </article>
        </main>

    )
}
export default RevenueExpenseTotal;