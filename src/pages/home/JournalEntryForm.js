import { useState } from "react";

const JournalEntryForm = () => {
    const [transactionName, setTransactionName] = useState('')
    const [amount, setAmount] = useState('') 

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(transactionName, amount)
    }

    return(
        <>
        <h3>Add Transaction</h3>
        <form action="" onSubmit={handleSubmit}>
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