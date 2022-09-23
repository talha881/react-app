import React, { useState, useEffect} from 'react';
import Card from '../Card'
import {useDispatch, useSelector} from 'react-redux'; 
// import { Products } from '../products'
import '../App.css'
import {getAllProducts} from '../redux/actions/productsActions'

const Home = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getAllProducts());


  },[])
  const products = useSelector((state)=>state.products.products)
    // const [Product, setproduct] = useState(Products)
    return (
        <div className="row">
        {
           products.map(p => <Card prod={p}/>)

        }
        </div>
    );
};

export default Home;