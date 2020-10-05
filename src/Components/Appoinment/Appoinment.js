import React from 'react';
import { useHistory } from 'react-router-dom';
import './Appoinment.css';

const Appoinment = (props) => {
    const {charityname, date,_id} = props.ap;
    console.log(_id);
    return (
       
        <>
         
           <div className="edit col-md-5">
                <h1>{charityname}</h1>
                    <h5>{date}</h5>
                    <button onClick={() =>props.handle(`${_id}`)}>cancle</button>
           </div>
        </>
    );
};

export default Appoinment;