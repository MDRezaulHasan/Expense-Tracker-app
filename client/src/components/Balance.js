import React, {useContext} from 'react'
import {GlobalContext } from '../context/GlobalState'

const Balance = () => {

const {transaction} = useContext(GlobalContext)
let income = 0
let expense = 0
let total=0

transaction.map(trans => {
    trans.amount>0 ? income +=  trans.amount : expense += trans.amount
})

total=income-Math.abs(expense)
    return (
    <div className="card center teal lighten-1 brown-text text-darken-2">
            
            <h4>Your Balance - <span> {total}.00 NOK</span></h4>
            
       
        </div>
            
    )
}

export default Balance