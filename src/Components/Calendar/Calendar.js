import React from 'react';
import {Container, Col, Row} from 'reactstrap';
import "./Calendar.css";

const Calendar = () =>{
    return(
    <Container fluid className="school-calendar">
        <Row className="calendar-title">
                <h2>Calendario De Eventos</h2>
        </Row>
        <Row>
            <Col className="event-container">
                <div className="event" md="4" xl="4">
                    <Row>
                        <Col md="4" xl="3" className="fecha">
                            <h3><span className="mes">Mayo</span>22</h3>
                        </Col>
                        <Col md="8" xl="9">
                            <h3> Casa Abierta</h3>
                            <p className="nat">Viernes 10 de Mayo<span className="horario"> 6:30 PM - 10:30 PM</span></p>
                        </Col>               
                    </Row>
                </div>
            </Col>
            <Col className="event-container dotted">
                <div className="event" md="4" xl="4">
                    <Row>
                        <Col md="4" xl="3" className="fecha">
                            <h3><span className="mes">Mayo</span>22</h3>
                        </Col>
                        <Col md="8" xl="9">
                            <h3> Casa Abierta</h3>
                            <p className="nat">Viernes 10 de Mayo<span className="horario"> 6:30 PM - 10:30 PM</span></p>
                        </Col>               
                    </Row>
                </div>
            </Col>
            <Col className="event-container">
                <div className="event" md="4" xl="4">
                    <Row>
                        <Col md="4" xl="3" className="fecha">
                            <h3><span className="mes">Mayo</span>22</h3>
                        </Col>
                        <Col md="8" xl="9">
                            <h3> Casa Abierta</h3>
                            <p className="nat">Viernes 10 de Mayo<span className="horario"> 6:30 PM - 10:30 PM</span></p>
                        </Col>               
                    </Row>
                </div>
            </Col>
        </Row>
    </Container>
    ) 
}

export default Calendar;