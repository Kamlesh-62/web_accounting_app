import { useState, useEffect } from "react";
import { useFireStore } from "../../hooks/useFirestore";

const JournalEntryForm = ({uid}) => {
    const [transactionName, setTransactionName] = useState('')
    const [amount, setAmount] = useState('') 
    const [revenueExpense, setRevenueExpense] = useState('revenue')
    const [expenseType, setExpenseType] = useState('')
    const [revenueType, setRevenueType] = useState('')
    const { addDocument, state} = useFireStore('transaction')

    const handleSubmit = (e) => {
        e.preventDefault()
        addDocument({
            uid,
            transactionName,
            amount,
            revenueExpense,
            revenueType,
            expenseType
        }) 
    }
    console.log(revenueExpense, revenueType, expenseType)

    useEffect(() => {
        if (state.success) {
            setTransactionName('')
            setAmount('')
        }
    }, [state.success])


    return(
        <>
        <h3>Add Transaction</h3>
        <form onSubmit={handleSubmit}>

            <label htmlFor="revenue/expense">Select Revenue/Experience</label>
            <select 
            name="revenue/expense" 
            value={revenueExpense} 
            id="revenue/expense" 
            onChange={(e) => {setRevenueExpense(e.target.value)}}
            >
                <option value="placeholder" disabled>Revenue/Expense</option>
                <option value='revenue' >Revenue</option>
                <option value='expense' >Expense</option>
            </select>

            {revenueExpense === "revenue" ?
            <>
                <label htmlFor="revenueList">Revenue List</label>
                <select 
                name="Revenue list" 
                id="revenueList"
                value={revenueType}
                onChange={(e) => {setRevenueType(e.target.value)}}
                >
                    <option value="" disabled >Revenue List</option>
                    <option value="salary">Salary</option>
                    <option value="services">Services</option>
                    <option value="sales">Sales</option>
                    <option value="other">Other Revenue</option>
                </select> 
            </>
            : 
            <>
                <label htmlFor="ExpenseList">Expense List</label>
                <select 
                name="Expense list" 
                id="ExpenseList"
                value={expenseType}
                onChange={(e) => { setExpenseType(e.target.value) }}
                >
                    <option value="" disabled >Expense List</option>
                    <option value="carExpense">Car(Insurance, Payment, Gas) </option>
                    <option value="grocery">Grocery</option>
                    <option value="houseExpense">House(Rent, Mortgage, Utilities)</option>
                    <option value="miscellaneous">miscellaneous</option>
                    <option value="tutionFees">Tution fees</option>
                    <option value="otherExpenses">Other Expense</option>
                </select>
            </>
            }

            <label htmlFor="trasactionName">Trasaction Name:</label>
            <input type="text" id="trasactionName" 
            placeholder="Trasaction Name"
            value={transactionName}
            onChange={(e) => setTransactionName(e.target.value)}
            required
            />

            <label htmlFor="amount">Amount:</label>
            <input type="number" id="amount" 
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            />

            <button>Post Entry</button>
        </form>
        </>
    )
}
export default JournalEntryForm;





