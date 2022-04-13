import './entryList.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const EntryList= ({entries}) => {
    return(
        <section className='wrapper entryList'>
            <h3>List of Entries</h3>
            <ul className="listOfentries">
                {entries.map((entry) => (
                    entry.revenueExpense === "revenue"? 
                    <li key={entry.id} className="revenue" >
                        <p className='amount'>${entry.amount}</p>
                        <p className='name'>{entry.transactionName}</p>
                        <p className='date'>{entry.date}</p>
                        <div><FontAwesomeIcon className='delete-btn' icon={faTrashCan} /></div>
                    </li> :
                    <li key={entry.id} className="expense" >
                        <p className='amount'>${entry.amount}</p>
                        <p className='name'>{entry.transactionName}</p>
                        <p className='date'>{entry.date}</p>
                        <div><FontAwesomeIcon className='delete-btn' icon={faTrashCan} /></div>
                    </li>
                ))}
            </ul>
        </section>
    )
}
export default EntryList;