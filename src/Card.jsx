import React from "react"
import { Container, Card, Col, Button } from 'react-bootstrap';
import img1 from './images/image1.png';
import './App.css';
import { Link } from "react-router-dom";

//const {prod} = props
const card = ({ prod }) => {


    return (


        <div className='col-md-4'>
            <Link to= {`/detail/${prod.id}`}>
                <div classNmae='Card'>
                    
                    <img style ={{width: '150px'}} src={prod.image} class = 'card-img-top' alt= "..."/>
                    <div className="Card-Body">
                        <h5 className="Card-title">{prod.title}</h5>
                        {/* <p className='Card-Text'>{prod.description}</p> */}


                        <a href='#' className="btn btn-primary">PKR {prod.price}</a>
                    </div>
                </div>
            </Link>
        </div>



    );

}
export default card;