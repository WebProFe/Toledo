import React from 'react';
import {Container, Col, Row} from 'reactstrap';
import "./FourCol.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FourCols = (props) =>{
    return(
    <Container fluid className="four-col">
        <Row className="col-title">
                {/* <h2>Colegio Bilingue Toledo</h2> */}
                <p>Fundado en 2001 Colegio Bilingue Francisco de Toledo ofrece clases en Ingles para ayudar a alumnos en su desarrollo de la lengua del Ingles. Nuestro colegio ofrece clases a estudiantes de kinder hasta 3ro de Secundaria. Nuestros maestros estan altamente capacitados y preparados para ayudar a nuestros estudiantes a fomentar sus abilidades mediante proyectos y actividades rigorosas. </p>
        </Row>
        <Row>
            <Col className="col-4" xs="6" sm="6" md="3" >
                <FontAwesomeIcon icon="shield-alt" color="#10316B" size="2x" />
                <h4>Admisiones</h4>
                <p>555-555-5555</p>
            </Col>
            <Col className="col-4" xs="6" sm="6" md="3">
                <FontAwesomeIcon icon="map-marked-alt" color="#10316B" size="2x"/>
                <h4>Direccion</h4>
                <p>Avenida Benito Juarez Torreon, Coah.</p>
            </Col>
            <Col className="col-4" xs="6" sm="6" md="3">
                <FontAwesomeIcon icon="clock" color="#10316B" size="2x"/>
                <h4>Horario</h4>
                <p>7:00 PM - 4:00 PM</p>
            </Col>
            <Col className="col-4" xs="6" sm="6" md="3">
                <FontAwesomeIcon icon="certificate" color="#10316B" size="2x"/>
                <h4>Programas</h4>
                <p>Kinder</p>
                <p>Primaria</p>
                <p>Secundaria</p>
            </Col>
        </Row>
    </Container>
    ) 
}

export default FourCols;