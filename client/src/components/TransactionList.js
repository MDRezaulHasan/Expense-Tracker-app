import React, {useContext,useEffect} from 'react'
import {GlobalContext } from '../context/GlobalState'
import TransactionDetails from './TransactionDetails'


 const TransactionList = () => {
    const {transaction,getTransaction}= useContext(GlobalContext)

    useEffect(()=>{
        getTransaction();
        //eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <div>
            <h5>History</h5>
            <ul className="list">
                {transaction.map(trans => (<TransactionDetails key={trans._id} trans={trans} /> ))}
               
            </ul>            
        </div>
    )
}
export default TransactionList