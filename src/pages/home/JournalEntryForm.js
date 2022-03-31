import { useState, useEffect } from "react";
import { useFireStore } from "../../hooks/useFirestore";

const JournalEntryForm = ({uid}) => {
    const [transactionName, setTransactionName] = useState('')
    const [amount, setAmount] = useState('') 
    const { addDocument, state} = useFireStore('transaction')

    const handleSubmit = (e) => {
        e.preventDefault()
        addDocument({
            uid,
            transactionName,
            amount,
        }) 
        console.log(transactionName,amount,uid)
    }
    

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