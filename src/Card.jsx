import React from "react" 
import { Container, Card, Col, Button } from 'react-bootstrap';
import img1 from './images/image1.png';
import './App.css';

//const {prod} = props
const card =({prod})=> {


    return (
        
            
                <div className = 'col-md-4 row-custom'>
                    <div classNmae = 'Card'>
                        <Card.Img variant="top" src={img1} />
                        <div className = "Card-Body">
                            <h5 className = "Card-title">{prod.Title}</h5>
                            <p className = 'Card-Text'>{prod.Description}</p>
                                
                               
                            <a href = '#' className = "btn btn-primary">PKR {prod.Price}</a>
                        </div>
                    </div>
                </div>
            

       
    );

}
export default card;