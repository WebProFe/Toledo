import React, { Component } from 'react';
import { 
    Collapse, 
    Navbar, 
    NavbarToggler, 
    NavbarBrand, 
    Nav, 
    NavItem, 
    NavLink
} from 'reactstrap';
import logo from '../../images/toledo-logo.png';
import './NavBar.css';

export default class NabvarMenu extends Component{

    constructor(props){
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        }
    }

    toggle(){
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render(){
        return(
            <div>
                <Navbar light expand="md" className="navigation">
                    <NavbarBrand className="sc-logo"><img src={logo} alt="SC Salon" /></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/">INICIO</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/services/">SERVICIOS</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/contact">CONTACTO</NavLink>
                        </NavItem>
                        </Nav>
                    </Collapse>

                </Navbar>
            </div>
        )
    }
}
