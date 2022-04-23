import React from "react";
import "./cashFlow.scss"
import { useRevenueExpenseTotal } from "../../hooks/useRevenueExpenseTotal"

const CashflowReport = ({ documents, user}) => {
    const { revenueAmontArray, expenseAmontArray, findTotal } = useRevenueExpenseTotal(documents);

    let revArray = [];
    let expArray = [];

    documents.forEach((doc) => {
        if (doc.revenueExpense === "expense") {
            expArray.push(doc);
        } else if (doc.revenueExpense === "revenue") {
            revArray.push(doc);
        }
    })
    // getting data from useRevenueExpenseTotal and store in variable
    const revenueTotal = findTotal(revenueAmontArray)
    const expenseTotal = findTotal(expenseAmontArray)

    return (
        <section className="cashFlow">
            <h3> Report of Cash Flows for {user.displayName}</h3>
            <div className="cashFlowTable">
                <table>
                    <thead className="heading">
                        <tr>
                            <th>Description</th>
                            <th>Amount</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody className="income-tranaction-list">
                        <tr className="income-heading"><td>Income</td></tr>
                        {revArray.map((singleTrasaction) => (
                            <tr className="rev-details"  key={singleTrasaction.id}>
                                <td>{singleTrasaction.transactionName}</td>
                                <td>${singleTrasaction.amount}</td>
                                <td></td>
                            </tr>
                        ))}
                        <tr className="total-income">
                            <td> Total Income</td>
                            <td></td>
                            <td>${revenueTotal}</td>
                        </tr>
                        <tr className="expense-heading"><td>Expense</td></tr>
                        {expArray.map((singleTrasaction) => (
                            <tr className="exp-details" key={singleTrasaction.id}>
                                <td>{singleTrasaction.transactionName}</td>
                                <td>${singleTrasaction.amount}</td>
                                <td></td>
                            </tr>
                        ))}
                        <tr className="total-expense">
                            <td>Total Expense</td>
                            <td></td>
                            <td>${expenseTotal}</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Profit</th>
                            <th></th>
                            <th>${revenueTotal - expenseTotal}</th>
                        </tr>
                    </tfoot>

                </table>
            </div>
        </section>
    )
}
export default CashflowReport;