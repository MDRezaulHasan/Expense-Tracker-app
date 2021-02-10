import React,{useState,useContext} from 'react'
import {GlobalContext } from '../context/GlobalState'

const NewTransaction = () => {

    const {addTransaction} =useContext(GlobalContext);
    const [details,setDetails]=useState('');
    const [amount, setAmount] = useState(0);

    const onSub=(e)=>{
        e.preventDefault();
        const newDetails={
        
        details:details,
        amount: amount
        }   
        console.log(newDetails);
        addTransaction(newDetails) ;
        setAmount(0);
        setDetails('');
    }

    return (
        <div>
            <h5>Add Transaction</h5>
            <form onSubmit={onSub}>
                <div className="input-field">
                <input type="text" value={details} onChange={(e)=>setDetails(e.target.value)}/>
                <label htmlFor="details"className="grey-text text-darken-2">Add details</label>
                </div>
                <div className="input-field">
                <input type="text" value={amount} onChange={(e)=>setAmount(e.target.value)}/>
                <label htmlFor="amount" className="grey-text text-darken-2">Add Amount (Expenses in - and Income in +)</label>
                </div>
                <div className="center">
                <button className="btn black-text"><b>Add Transaction</b></button>
                </div>
            </form>
        </div>
    )
}
export default NewTransaction