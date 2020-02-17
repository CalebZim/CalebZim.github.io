import React from 'react';
import Zoom from 'react-reveal/Fade';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import './Projects.css'

const Projects = () => {
    return (
    <div className='Projects pa'>
    <Zoom >
        <h3 className='Title fs-l c-lb'>
        My Projects<br />
        </h3>
        <CardDeck>
            <Card>
                <img alt="RoboFriends" src={require("./Pictures/RoboFriends.png")} />
                <Card.Text>
                    <h1>RoboFriends App</h1><br />
                    <h4>This app fetches the users<br/> and pictures from an api. <br/>You can search for a user in the search bar.</h4>
                </Card.Text>
                <ButtonGroup >
                    <Button target='_blank' href='https://calebzim.github.io/robofriends/' variant="secondary">Live</Button>
                <Button target='_blank' href='https://github.com/CalebZim/robofriends'>Source Code</Button></ButtonGroup>
                <Card.Footer>
                <small className="text-muted">Made in 2019</small>
                </Card.Footer>
            </Card>
            <Card>
                <img alt="RoboFriends" src={require("./Pictures/face-rec.png")} />
                <Card.Text>
                    <h1>Coming Soon | Face Recognition</h1><br />
                    <h4>This app recognizes faces using the Clarifai api. Set up an accountor login, and enter a URL and it will put a box around the faces. It has a server and data base.</h4>
                </Card.Text>
                <ButtonGroup >
                    <Button target='_blank' href='https://calebzim.github.io/face-recognition/' variant="secondary">Live</Button>
                <Button target='_blank' href='https://github.com/CalebZim/robofriends'>Source Code</Button></ButtonGroup>
                <Card.Footer>
                <small className="text-muted">Made in 2020</small>
                </Card.Footer>
            </Card>
            <Card>
                <img alt="RoboFriends" src={require("./Pictures/site.png")} />
                <Card.Text>
                    <h1>This Website</h1><br />
                    <h4>This app uses <br />react-boostrap<br />and react-reveal.</h4>
                </Card.Text>
                <ButtonGroup >
                <Button target='_blank' href='https://github.com/CalebZim/CalebZim.github.io'>Source Code</Button></ButtonGroup>
                <Card.Footer>
                <small className="text-muted">Made in 2020</small>
                </Card.Footer>
            </Card>

        </CardDeck>
    </Zoom>
    </div>
    );
}

export default Projects;