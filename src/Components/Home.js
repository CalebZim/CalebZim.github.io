import React from 'react';
import Zoom from 'react-reveal/Zoom';
import './Home.css'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
    <div className='Title fs-m pa-2'>
    <Zoom >
        <h1>Hello,
        <br />I am
        <br />Caleb Zimmerman
        </h1>
        <Link to='/Projects' className='projects'>My Projects</Link>
        <div className='contact'><br/>
            <a  rel='noreferrer noopener' target='_blank' href='https://github.com/CalebZim'>
            <img alt='Github' className='img pa-2' src={require("./Pictures/octocat.png")} /></a>
            <p><br/>
            © 2020 Caleb Zimmerman
            </p>
        </div>
        </Zoom>
    </div>
    );
}

export default Home;