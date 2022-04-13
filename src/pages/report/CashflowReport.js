
const CashflowReport = ({documents, user}) => {

    console.log(documents)

    let revArray = [];
    let expArray = [];
    
    documents.forEach((doc) => {
        if (doc.revenueExpense === "expense") {
            expArray.push(doc);
        } else if (doc.revenueExpense === "revenue") {
            revArray.push(doc);
        }
    })

    return(
        <section>
            <h3> Report of Cash Flows for {user.displayName}</h3>
            <div className="revenueFlow">
                     
            </div>
            
        </section>
    )
}
export default CashflowReport;