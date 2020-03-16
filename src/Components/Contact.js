import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'


const Contact = () => {
    return (
    <div className='f-desc pa'>
    <br />
    <br />
    <Jumbotron>
        <h1>See what I am doing</h1><a  rel='noreferrer noopener' target='_blank' href='https://github.com/CalebZim'>
        <img alt='Github' className='img' src={require("./Pictures/octocat.png")} /></a>
    </Jumbotron>
        <p>
         © 2020 Caleb Zimmerman
        </p>
    </div>
    );
}

export default Contact;