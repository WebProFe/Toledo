import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import "./Collage.css";
import { slide, girl, alberca, gameRoom, classRoom   } from './Images'

const Collage = () =>{
    return(
    <Container fluid className="collage">
        <Row className="collage-container">
            <Col className="collage-container-left" sm="4" xl="4">
                <Row>
                    <div className="top-left-pic">
                        <img src={alberca} alt="nino" />
                    </div>
                    <div className="small-pic-overlay left">
                        <div className="text sm">
                            <h3>Ofrecemos Clases de Natacion</h3>
                            <p>Equipos compiten en regiones</p>
                        </div>
                    </div>
                </Row>
                <Row>
                    <div className="bottom-left-pic">
                        <img src={slide} alt="alberca" />
                    </div>
                    <div className="medium-pic-overlay left">
                        <div className="text md">
                            <h3>Espacios Abiertos</h3>
                            <p>Los chiquitos tienen su espacio para divertirse</p>
                        </div>
                    </div>
                </Row>
            </Col>
            <Col className="collage-container-center" sm="4" xl="4">
                    <Row className="center-row">
                        <div className="center-pic">
                            <img src={gameRoom} alt="nino" />
                        </div>
                        <div className="large-pic-overlay">
                            <div className="text lg">
                                <h3>Espacios Abiertos</h3>
                                <p>Ayudan a fomentar el desarrollo</p>
                            </div>
                        </div>  
                    </Row>    
            </Col>
            <Col className="collage-container-left" sm="4" xl="4">
                <Row>
                    <div className="top-right-pic">
                        <img src={girl} alt="nino"/>
                    </div>
                    <div className="medium-pic-overlay right">
                        <div className="text md">
                            <h3>Kinder A Secundaria</h3>
                            <p>Inscribciones abiertas</p>
                        </div>
                    </div>
                </Row>
                <Row>
                    <div className="bottom-right-pic">
                        <img src={classRoom} alt="alberca" />
                    </div>
                    <div className="small-pic-overlay right">
                        <div className="text sm">
                            <h3>Todo Para Triunfar</h3>
                            <p>Contamos con salones modernos</p>
                        </div>
                    </div>
                </Row>
            </Col>
        </Row>
    </Container>
    ) 
}

export default Collage;