import React from 'react';
import {useDispatch, useSelector} from 'react-redux'; 
import {useState} from 'react';


const Counter = ()=> {
    const [num , setNum] = useState('');
    const [error , setError] = useState('');
    const dispatch = useDispatch();
    const counter = useSelector((state)=>state.counter)
    
    const handleChange =(e)=>{
        setNum(e.target.value) 

    }
    const handleDeposit =()=>{
        if (num<0){
            setError("Balance canot be negative");
            return; 
        }
        if(!num){
          setError("Please enter some amount to deposit");
        }
        else{

        
        dispatch({type:"DEPOSIT", payload: Number(num)})
        setNum('')
        }

    }
    return (
        <div>
            <input type = "text" onChange={handleChange} value= {num}/>
            <button onClick={handleDeposit}>Deposit</button>
            <p style = {{color:'red}'}}>{error}</p>
            <span>{counter} </span>
             <button onClick={()=>dispatch({type:'WITHDRAW',payload:5})}>WithDraw</button> 
        </div>
    )
}



export default Counter;