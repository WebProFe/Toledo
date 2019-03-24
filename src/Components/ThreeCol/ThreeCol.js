import React from 'react';
import {Container, Col, Row} from 'reactstrap';
import "./ThreeCol.css";
import pool from './Imgs/pool.png'
import soccer from './Imgs/soccer.png'
import dance from './Imgs/dance.png'

const FourCols = (props) =>{
    return(
    <Container fluid className="school-activities">
        <Row className="bubbles-title">
            <Col>
                <h2>ACTIVIDADES</h2>
            </Col>
        </Row>
        <Row className="all-bubbles-container">
            <Col className="bubble-container">
                <div className="bubble" xl="4">
                    <img src={pool} alt="pool" /> 
                    <p className="nat">Natacion</p>               
                </div>
            </Col>
            <Col className="bubble-container">
                <div className="bubble" xl="4">
                    <img src={soccer} alt="pool" /> 
                    <p className="fut">Futbol</p>               
                </div>
            </Col>
            <Col className="bubble-container">
                <div className="bubble" xl="4">
                    <img src={dance} alt="pool" /> 
                    <p className="baile">Baile Moderno</p>               
                </div>
            </Col>
        </Row>
    </Container>
    ) 
}

export default FourCols;