import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css'
const Card = ({ category }) => {
    const { logo, name } = category
    return (
        <div className="col">
            <div className="card h-100">
                <img src={logo} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title fs-2">{name}</h5>
                    <Link><button className='btn btn-danger mt-3'>Button</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Card;