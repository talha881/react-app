import React from 'react';
import {useEffect} from 'react';
import { useParams } from "react-router-dom";
// import {Products} from '../products' 
import {useDispatch, useSelector} from 'react-redux/es/exports'
import { getProductsById } from '../redux/actions/productsActions';

const Detail = () => {
    const{id} = useParams();
   
   
    
    const dispatch = useDispatch();
    useEffect (()=>{
    dispatch(getProductsById(id));
    },[])
    //  const product = Products.find((p)=>p.id=== Number(id))

    var product = useSelector((state)=>state.products)
    console.log(product.products[0],'hello')
 
  
   
    
    return (
        
        <div>
          
           <h1>{product.products[id].title}</h1> 
           <h3>{product.products[id].description}</h3>
        </div>
    )
}

export default Detail