import { useState, useEffect } from "react";
import { useFireStore } from "../../hooks/useFirestore";
import './journalEntry.scss'

const JournalEntryForm = ({uid}) => {
    const [amount, setAmount] = useState('') 
    const { addDocument, state} = useFireStore('transaction')
    const [date, setDate] = useState('')
    const [expenseType, setExpenseType] = useState('')
    const [revenueExpense, setRevenueExpense] = useState('revenue')
    const [revenueType, setRevenueType] = useState('')
    const [transactionName, setTransactionName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        addDocument({
            amount,
            date,
            expenseType,
            revenueExpense,
            revenueType,
            transactionName,
            uid
        }) 
    }

    useEffect(() => {
        if (state.success) {
            setTransactionName('')
            setAmount('12')
            setDate('')
        }
    }, [state.success])


    return(
        <section className="journalEntry-form">
            <form onSubmit={handleSubmit}>

                <h3>Add Transaction</h3>
                
                <label htmlFor="revenue/expense" className="sr-only">Select Revenue/Experience</label>
                <select 
                name="revenue/expense" 
                value={revenueExpense} 
                id="revenue/expense" 
                onChange={(e) => {setRevenueExpense(e.target.value)}}
                required
                >
                    <option value="" disabled>Revenue/Expense</option>
                    <option value='revenue' >Revenue</option>
                    <option value='expense' >Expense</option>
                </select>

                {revenueExpense === "revenue" ?
                <>
                <label htmlFor="revenueList" className="sr-only">Revenue List</label>
                <select 
                name="Revenue list" 
                id="revenueList"
                value={revenueType}
                onChange={(e) => {setRevenueType(e.target.value)}}
                required
                >
                    <option value="" disabled >Revenue List</option>
                    <option value="sales">Sales</option>
                    <option value="services">Services</option>
                    <option value="other">Other Revenue</option>
                </select> 
                </>
                : 
                <>
                <label htmlFor="ExpenseList" className="sr-only" >Expense List</label>
                <select 
                name="Expense list" 
                id="ExpenseList"
                value={expenseType}
                onChange={(e) => { setExpenseType(e.target.value) }}
                required
                >
                    <option value="" disabled >Expense List</option>
                    <option value="carExpens">Car(Insurance, Payment, Gas) </option>
                    <option value="educationCost">Education Cost</option>
                    <option value="grocery">Grocery</option>
                    <option value="houseExpense">House(Rent, Mortgage, Utilities)</option>
                    <option value="incomeTaxExpense"> Income Tax Expense</option>
                    <option value="miscellaneous">miscellaneous</option>
                    <option value="otherExpenses">Other Expense</option>
                </select>
                </>
                }

                <label htmlFor="trasactionName" className="sr-only" >Trasaction Name:</label>
                <input type="text" id="trasactionName" 
                placeholder="Trasaction Name"
                value={transactionName}
                onChange={(e) => setTransactionName(e.target.value)}
                required
                />

                <label htmlFor="amount" className="sr-only" >Amount:</label>
                <input type="number" id="amount" 
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
                />

                <label htmlFor="date" className="sr-only">Date:</label>
                <input type="date" id="date" name="transaction-date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                min="2020-01-01" />

                <button className="post-btn btn">Post Entry</button>
            </form>
        </section>
    )
}
export default JournalEntryForm;





