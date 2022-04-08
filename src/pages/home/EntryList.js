import './entryList.scss'
const EntryList= ({entries}) => {
    return(
        <section className='wrapper entryList'>
            <h3>List of Entries</h3>
            <ul className="listOfentries">
                {entries.map((entry) => (
                    <li key={entry.id}>
                        <p>{entry.date}</p>
                        <p>{entry.transactionName}</p>
                        <p>${entry.amount}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}
export default EntryList;