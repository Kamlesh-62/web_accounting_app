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

    console.log(revArray)


    return(
        <section className="cashFlow">
            <h4> Report of Cash Flows for {user.displayName}</h4>
            <div>
                <div className="revenueFlow">
                    <div>
                        {
                           
                        }
                    </div>   
                </div>
                <div className="expenseFlow">

                </div>
            </div>
            
        </section>
    )
}
export default CashflowReport;