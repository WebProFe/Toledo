import React from 'react';
import { Container, Row } from 'reactstrap'
import './Hero.css';

const Hero = (props)=> {
    return(
        <Container fluid>
            <Row>
                <div className="hero-container">
                    <img src={props.image} alt="hero-background" />
                    <div className="hero-text">
                        <h2>{props.heading}</h2>
                        <p>{props.description}</p>
                    </div> 
                </div>  
            </Row> 
        </Container>
    )
}

export default Hero;