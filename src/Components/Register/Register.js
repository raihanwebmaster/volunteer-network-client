import React, { useContext, useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../images/logos/Group 1329.png';
import './Register.css';

const Register = () => {
    const {charityname} = useParams();
    const [loggedInUser, setLoggedinUser]= useContext(UserContext);
    const[input, setInput]=useState({
        name:"",
        email: "",
        date: "",
        disicription: "",
        charityname: "",
    });
    useEffect(()=>{
        setInput({
            ...input,
            name:loggedInUser.name,
            email:loggedInUser.email,
            charityname: charityname,
        })
    },[])
    const handleChangeInput = (e) => {
        setInput({...input,[e.target.name]:e.target.value})
        };
    const history= useHistory()
    const handleBooking =()=>{
        history.push('/Appoinment');
         fetch('http://localhost:5000/addProduct',{
           method: 'POST', 
           headers: {'Content-Type': 'application/json'},
           body: JSON.stringify(input)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }
    return (
        <div className="from-body">
            <Link to="/" className='text-white logo'><img className="logo" src={logo} alt="" /></Link>            
            <Form className="from">    
                <h2>Registar as a volunteer</h2>            
                <Form.Group controlId="formGroupEmail">                    
                    <Form.Control onChange={(e)=>handleChangeInput(e)} name="name" className="control" type="text" defaultValue={loggedInUser.name} />
                    <Form.Control onChange={(e)=>handleChangeInput(e)} name="email" className="control" type="email" defaultValue={loggedInUser.email} />
                    <Form.Control onChange={(e)=>handleChangeInput(e)} name="date" className="control" type="date" value={input.date} placeholder="Date" />
                    <Form.Control onChange={(e)=>handleChangeInput(e)} name="disicription" className="control"  value={input.disicription} type="text" placeholder="Disicription" />
                    <Form.Control onChange={(e)=>handleChangeInput(e)} name="charityname" className="control" type="text"  defaultValue={charityname} />
                   
                </Form.Group>
                <Button onClick={handleBooking} className="button" type="submit" variant="primary" >Registation</Button>
            </Form>
        </div>
    );
};

export default Register;