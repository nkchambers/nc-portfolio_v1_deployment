import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Csharp from '../assets/img/c--4.svg';
import flask from '../assets/img/flask.svg';
import HTML from '../assets/img/html-1.svg';
import BackendDev from '../assets/img/amazon-database.svg';
import expressIcon from '../assets/img/express-icon.jpg';
import WebDesign from '../assets/img/google-web-designer.svg';
import Bootstrap from '../assets/img/bootstrap-5-1.svg';
import fullStack from '../assets/img/code.png';
import softwareDev from '../assets/img/software-development_1875609.png';
import CSS from '../assets/img/css-3.svg';
import AWS from '../assets/img/amazon-web-services-logo.svg';
import NET from '../assets/img/dot-net-core-7.svg';
import github from '../assets/img/github-icon-2.svg';
import Javascript from '../assets/img/logo-javascript.svg';
import Python from '../assets/img/python-5.svg';
import React from '../assets/img/react-2.svg';
import nodejs from '../assets/img/nodejs-icon.svg';
import MySQL from '../assets/img/mysql-6.svg';
import mongoDB1 from '../assets/img/mongodb-icon-1.svg';
import colorSharp from '../assets/img/color-sharp.png';

export const Skills = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };


    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2 className="p-3">
                                Skills
                            </h2>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider align-items-center justify-center">
                                <div className="item">
                                    <img src={HTML} alt=""></img>
                                    <h5>Web Development</h5>
                                </div>
                                <div className="item">
                                    <img src={BackendDev} className="bg-white" alt=""></img>
                                    <h5>Back-end Develpment</h5>
                                </div>
                                <div className="item">
                                    <img src={CSS} alt=""></img>
                                    <h5>Front-end Development</h5>
                                </div>
                                <div className="item">
                                    <img src={fullStack} alt=""></img>
                                    <h5>Full-stack Development</h5>
                                </div>
                                <div className="item">
                                    <img src={WebDesign} alt=""></img>
                                    <h5>Web Design</h5>
                                </div>
                                <div className="item">
                                    <img src={Python} alt=""></img>
                                    <h5>Python</h5>
                                </div>
                                <div className="item">
                                    <img src={React} alt=""></img>
                                    <h5>React.js</h5>
                                </div>
                                <div className="item">
                                    <img src={AWS} className="bg-white" alt=""></img>
                                    <h5 className="">AWS EC2</h5>
                                </div>
                                <div className="item">
                                    <img src={Csharp} alt=""></img>
                                    <h5>C#</h5>
                                </div>
                                <div className="item">
                                    <img src={Bootstrap} alt=""></img>
                                    <h5>Bootstrap (Framework)</h5>
                                </div>
                                <div className="item">
                                    <img src={MySQL} alt=""></img>
                                    <h5>MySQL</h5>
                                </div>
                                <div className="item">
                                    <img src={mongoDB1} alt=""></img>
                                    <h5 className="pt-1">Mongo DB</h5>
                                </div>
                                <div className="item">
                                    <img src={nodejs} alt=""></img>
                                    <h5>Node.js</h5>
                                </div>
                                <div className="item">
                                    <img src={expressIcon} className="" alt=""></img>
                                    <h5>Express.js</h5>
                                </div>
                                <div className="item">
                                    <img src={flask} className="bg-white" alt=""></img>
                                    <h5>Flask</h5>
                                </div>
                                <div className="item">
                                    <img src={Javascript} alt=""></img>
                                    <h5>JavaScript</h5>
                                </div>
                                <div className="item">
                                    <img src={softwareDev} alt=""></img>
                                    <h5 className="">Software Development</h5>
                                </div>
                                <div className="item">
                                    <img src={NET} alt=""></img>
                                    <h5>ASP.NET</h5>
                                </div>
                                <div className="item">
                                    <img src={github} alt=""></img>
                                    <h5>GitHub</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>

            <img className="background-image-left" src={colorSharp} alt=""/>
        </section>
    )

}