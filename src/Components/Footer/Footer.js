import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Footer.css';
import footerPic from '../../Images/toledo-logo.png';
import { SocialIcon} from 'react-social-icons';

const Footer = ()=> {
    return(
        <Container fluid className="footer">
            <Row className="footer-top">
                <Col className="footer-top-col-one" md="12" xl="4">
                    <h2>Conectate</h2>
                        <SocialIcon network="twitter" bgColor="white"  />
                        <SocialIcon network="facebook" bgColor="white" />
                        <SocialIcon network="instagram" bgColor="white" />
                </Col>
                <Col className="footer-top-col-two" align="center" md="12" xl="4">
                        <img src={footerPic} alt="sc-salon"/>
                </Col>
                <Col className="footer-top-col-three" md="12" xl="4">
                    <h2>Ponte En Contacto</h2>
                    <p>Direccion: <span>Calle 123, Tonala Jal.</span></p>
                    <p>Tel: <span>555-555-5555</span></p>
                    <p>Correo Electronico: <span>scsalon@gmail.com</span></p>
                </Col>
            </Row>
            <Row className="footer-bottom">
                <p>Copyright &copy; Todos los Derechos Reservados 2019 | Diseñado por IPQ, LLC</p>
            </Row>
        </Container>
    )
}

export default Footer;