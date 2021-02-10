import React,{createContext,useReducer} from 'react'
import AppReducer from './AppReducer'
import axios from 'axios'

const initialState={
    transaction:[],
    error:null,
    isLoading:true
       
}

export const GlobalContext=createContext(initialState);

export const GlobalProvider = ({children}) =>{ 
    const [state,dispatch] =useReducer(AppReducer,initialState)


async function getTransaction(){
    try{
        const res=await axios.get('/api/v1/transaction');
       
        dispatch({
            type:"GET_TRANSACTION",
            payload:res.data.data
        });
    }
    catch(err){
        dispatch({
            type:"TRANSACTION_ERROR",
            payload:err.response.data.error
        });

    }
}
async function deleteTransaction(id){
    try{
        await axios.delete(`/api/v1/transaction/${id}`);
    dispatch({
    type:"DELETE_RECORD",
    payload:id
    });
}
catch(err){
    dispatch({
        type:"TRANSACTION_ERROR",
        payload:err.response.data.error
     });
}
}    

async function addTransaction(transaction){

    console.log(transaction);
     const config={
    //     headers:{
    //         'content/type':'application/json'
    //     }
    // }
    headers: {
        accept: 'application/json',
      },
      data: {},
    };

    
        const res=await axios.post('/api/v1/transaction',transaction,config);
        console.log(res);
        try{
        dispatch({
            type:"ADD_RECORD",
            payload: res.data.data
        });
    }
    catch(err){
            dispatch({
                type:"TRANSACTION_ERROR",
                payload:err.response.data.error
            });
    }

    
}
    return( 
    
    <GlobalContext.Provider value={{
         transaction:state.transaction,
         error:state.error,
         isLoading:state.isLoading,
         getTransaction,
        deleteTransaction,
        addTransaction }}>

        {children}

    </GlobalContext.Provider>

    );

}
