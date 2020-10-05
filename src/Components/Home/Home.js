import React, { useState } from 'react';
import FakeData from '../../FakeData/FakeData';
import Charitys from '../Charitys/Charitys';
import Header from '../Header/Header';
import Inputbox from '../Inputbox/Inputbox';
import './Home.css';

const Home = () => {
    const view = FakeData;
    const [charity, setCharity] = useState(view);
    return (
        <>
        <div className="main">
            <Header></Header>
            <Inputbox></Inputbox>
        </div>
        <div className="row">
            {
                view.map(ch=> <Charitys ch={ch}></Charitys>)
            }
        </div>
            
        </>
    );
};

export default Home;