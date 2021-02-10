import React, {useContext} from 'react'
import {GlobalContext } from '../context/GlobalState'

const IncomeExpenses = () => {

const {transaction} = useContext(GlobalContext)
let income = 0
let expense = 0

transaction.map(trans => {
    trans.amount>0 ? income +=  trans.amount : expense += trans.amount
})


    return (
        <div className="row ie-row">
            <div className="col s6 card center">
                <h5>Income</h5>
                <p className="green-text"><b>(+) {income}.00 NOK </b></p>
            </div>
            <div className="col s6 card center ">
                <h5>Expense</h5>
                <p className="red-text"><b>(-) {Math.abs(expense)}.00 NOK</b></p>
            </div>
            
        </div>
    )
}
export default IncomeExpenses