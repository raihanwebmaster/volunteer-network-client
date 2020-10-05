import React from 'react';
import { Link } from 'react-router-dom';
import './Charitys.css';

const Charitys = (props) => {
    const {images, name}= props.ch;
    return (
    <>
        <Link to={`/register/${name}`} className="col-md-3 cullam">
                <img src={images} alt="" />
                <h1>{name}</h1>
        </Link>
    </>
    );
};

export default Charitys;