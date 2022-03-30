
const EntryList= ({entries}) => {

    return(
        <ul>
            {
                entries.map( (entry) => {
                    <li key={entry.id}>
                        <p>{entry.transactionName}</p>
                        <p>{entry.amount}</p>
                    </li>
                })
            }
        </ul>
    )
}
export default EntryList;