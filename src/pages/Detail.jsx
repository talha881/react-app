import React from 'react';
import { useParams } from "react-router-dom";
import {Products} from '../products' 

const Detail = () => {
    const{id} = useParams();
    const product = Products.find((p)=>p.id=== Number(id))
    return (
        
        <div>
        
           <h1>{product.Title}</h1> 
           <h3>{product.Description}</h3>
        </div>
    )
}

export default Detail