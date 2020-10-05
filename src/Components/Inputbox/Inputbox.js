import React from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import './Inputbox.css';

const Inputbox = () => {
    return (
        <div style={{marginBottom:'80px'}}>
        <h2>I GROW BY HELPING POEPOLE IN NEED.</h2>
        <Form inline className="justify-content-center">
            <FormControl type="text" placeholder="Search" className="mr-sm-2 " style={{width: '330px' , textAlign: 'center'}} />
            <Button >Search</Button>
        </Form>
    </div>
    );
};

export default Inputbox;