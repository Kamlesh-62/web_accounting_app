import React from "react";
import "./cashFlow.scss"

const CashflowReport = ({documents, user}) => {


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
        <section className="cashFlow">
            <h3> Report of Cash Flows for {user.displayName}</h3>
            <div className="revenueFlow">
                bzhb
                
            </div>
            
        </section>
    )
}
export default CashflowReport;