import { Button, Col, Container, Row } from "react-bootstrap";
import fastopen from "./FastOpen.png";
import komin from "./Komin.png";
import shop from "./shop.jpg";
import event from "./event.png";
import tictactoe from "./tictactoe.png";
import solvia from "./solvia.png";
import reactIcon from './react-color.svg';
import axiosIcon from './axios-color.svg';
import expoIcon from './expo-color.svg';
import expressIcon from './express-color.svg';
import mongoIcon from './mongodb-color.svg';
import muiIcon from './mui-color.svg';
import nodeIcon from './nodedotjs-color.svg';
import reactRouterIcon from './reactrouter-color.svg';
import reduxIcon from './redux-color.svg';
import socketIcon from './socketdotio-color.svg';
import typeScriptIcon from './typescript-color.svg';
import openaiIcon from './openai-color.svg';
import fastapiIcon from './fastapi-color.svg';
import spoilMe from './spoilme.png';

function Projects() {
    return (
        <div className="Projects" id="projects">
            <Container className="Projects">
                <h1 className="mb-5">My projects</h1>
                <Row>
                <Col>
                        <div className="project">
                            <div className="project-info">
                                <h2>Landing Page</h2>
                                <img src={reactIcon} alt="ReactJS" title="ReactJS"/>
                                <img src={reactRouterIcon} alt="React Router" title="React Router"/>
                                <img src={muiIcon} alt="MaterialUI" title="Material UI"/>
                            </div>
                            <img src={solvia} alt="" />
                            <div className="project-actions">
                                <Button href="https://github.com/JacobElbaz/solviaenergie" target="_blank" variant="outline-light">Repository</Button>
                                <Button href="https://solviaenergie.netlify.app/" target="_blank" variant="outline-light">Website</Button>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="project">
                            <div className="project-info">
                                <h2>Video Games Store</h2>
                                <img src={reactIcon} alt="ReactJS" title="ReactJS"/>
                                <img src={reduxIcon} alt="Redux" title="Redux"/>
                                <img src={reactRouterIcon} alt="React Router" title="React Router"/>
                                <img src={axiosIcon} alt="Axios" title="Axios"/>
                                <img src={nodeIcon} alt="Node.js" title="Node.js"/>
                                <img src={expressIcon} alt="express.js" title="express.js" style={{filter: 'invert(50%)'}}/>
                                <img src={mongoIcon} alt="mongoDB" title="mongoDB"/>
                            </div>
                            <img src={shop} alt="" />
                            <div className="project-actions">
                                <Button href="https://github.com/JacobElbaz/e-Shop" target="_blank" variant="outline-light">Repository</Button>
                                <Button href="https://game-zone-eshop.netlify.app/" target="_blank" variant="outline-light">Website</Button>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="project">
                            <div className="project-info">
                                <h2>Event Website</h2>
                                <img src={reactIcon} alt="ReactJS" title="ReactJS"/>
                                <img src={nodeIcon} alt="Node.js" title="Node.js"/>
                                <img src={expressIcon} alt="express.js" title="express.js" style={{filter: 'invert(50%)'}}/>
                                <img src={mongoIcon} alt="mongoDB" title="mongoDB"/>
                            </div>
                            <img src={event} alt="" />
                            <div className="project-actions">
                                <Button href="https://github.com/JacobElbaz/event-website" target="_blank" variant="outline-light">Repository</Button>
                                <Button href="https://event-react-frontend.netlify.app/" target="_blank" variant="outline-light">Website</Button>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="project">
                            <div className="project-info">
                                <h2>AI Project</h2>
                                <img src={reactIcon} alt="ReactJS" title="ReactJS"/>
                                <img src={openaiIcon} alt="OpenAI" title="OpenAI"/>
                                <img src={fastapiIcon} alt="FastAPI" title="FastAPI"/>
                            </div>
                            <img src={spoilMe} alt="" />
                            <div className="project-actions">
                                <Button href="https://github.com/JacobElbaz/tic-tac-toe" target="_blank" variant="outline-light">Repository</Button>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="project">
                            <div className="project-info">
                                <h2>Chrome Extension</h2>
                                <h5>ReactJS</h5>
                            </div>
                            <img src={fastopen} alt="" />
                            <div className="project-actions">
                                <Button href="https://github.com/JacobElbaz/react-extension" target="_blank" variant="outline-light">Repository</Button>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="project">
                            <div className="project-info">
                                <h2>Social Network</h2>
                                <img src={typeScriptIcon} alt="TypeScript" title="TypeScript"/>
                                <img src={reactIcon} alt="ReactJS" title="React Native"/>Native
                                <img src={nodeIcon} alt="Node.js" title="Node.js"/>
                                <img src={expressIcon} alt="express.js" title="express.js" style={{filter: 'invert(50%)'}}/>
                                <img src={mongoIcon} alt="mongoDB" title="mongoDB"/>
                                <img src={socketIcon} alt="Socket.io" title="Socket.io" style={{filter: 'invert(50%)'}}/>
                            </div>
                            <img src={komin} alt="" />
                            <div className="project-actions">
                                <Button href="https://github.com/JacobElbaz/komin" target="_blank" variant="outline-light">Repository</Button>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className="Buttons">
                    <a href="https://github.com/JacobElbaz/" target="_blank" className="text-decoration-none"><button className="btn-grad">To my Github</button></a>
                </div>
            </Container>
        </div>
    )
}

export default Projects;