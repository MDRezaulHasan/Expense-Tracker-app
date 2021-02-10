import React, {useContext} from 'react'
import {GlobalContext } from '../context/GlobalState'

const TransactionDetails = ({trans}) => {

    const {deleteTransaction} = useContext(GlobalContext);
    const classn= trans.amount>0 ?"card z-depth-1 li-list-plus" :"card z-depth-1 li-list-minus"
    return (
         
            <li className={classn}><b>{trans.details}<span className="right">{trans.amount} NOK</span></b>
            <button className="delete-btn" onClick={()=>deleteTransaction(trans._id)}>X</button>
            </li>
        
    )
}

export default TransactionDetails