import React, { useState } from 'react';
import Card from '../Card'
import { Products } from '../products'
import '../App.css';

const Home = () => {
    const [Product, setproduct] = useState(Products)
    return (
        <div className="row">
        {
          Product.map(p => <Card prod={p} />)

        }
        </div>
    );
};

export default Home;