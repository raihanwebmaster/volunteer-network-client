import React, { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { UserContext } from '../../App';
import Appoinment from '../Appoinment/Appoinment';
import Header from '../Header/Header';

const ShowAppoinment = () => {
    const [appoinment, setAppoinment]= useState ([]);
    const [loggedInUser, setLoggedinUser]= useContext(UserContext)
    function loadData() {
        fetch('http://localhost:5000/appoiontment?email='+loggedInUser.email
        )
        .then(res => res.json())
        .then(data => {
            setAppoinment(data)
        })
    }
    loadData()
    function deleteProduct(id){
        fetch('http://localhost:5000/delete/'+id,{
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(result=>{
            if (result) {
                loadData()
            }
        })
    }
    return (
        <Container className="row">
            <h1>hello {appoinment.length}</h1>
            <Header></Header>
            {
                appoinment.map(ap=> <Appoinment handle={deleteProduct} ap={ap}></Appoinment>)
            }
        </Container>
    );
};

export default ShowAppoinment;