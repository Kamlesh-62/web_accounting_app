import React from "react";

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
                <p>Revenue Statement</p>
                <table>
                    <tbody>
                        <tr>
                            <th>Description</th>
                            <th>Amount</th>
                        </tr>
                        {
                            // revArray.map(singleRevTrasaction =>{ 
                            //     return singleRevTrasaction.revenueType === 
                            //     "sales" ?
                            //     <React.Fragment key={singleRevTrasaction.id} >
                            //         <p>{singleRevTrasaction.revenueType}</p>
                            //         <tr >
                            //             <td>{singleRevTrasaction.transactionName}</td>
                            //             <td>{singleRevTrasaction.amount}</td>
                            //         </tr>
                            //     </React.Fragment>:
                            //     <></>
                            // })
                        }
                    </tbody>
                </table>
            </div>
            
        </section>
    )
}
export default CashflowReport;