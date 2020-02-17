import React from 'react';
import Zoom from 'react-reveal/Zoom';
import './Home.css'

const Home = () => {
    return (
    <div className='Title fs-m pa-2'>
    <Zoom >
        <h1>Hello,
        <br />I am
        <br />Caleb Zimmerman
        <br />This,
        <br /> is my Website.<br/><br/><br/><br/>
        </h1>
        </Zoom>
    </div>
    );
}

export default Home;