import React, { Component } from 'react';
import classnames from 'classnames';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
  import './Navigation.css';
  import logo from '../../Images/toledo-logo.png'

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      isOpen: false,
      prevScrollpos: window.pageYOffset,
      visible:true
    };
  }
  // Adds an event listener when the component is mount.
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  // Hide or show the menu.
  handleScroll = () => {
    const { prevScrollpos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;

    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });
  };

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className={classnames("navigation", {
        "navigation-hidden": !this.state.visible
      })}>
        <div className="top-bar"></div>
        <div className="toledo-logo"><img src={logo} alt="toledo"></img></div>
        <Navbar expand="md">
          <NavbarBrand href="/">Colegio Bilingue Toledo</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Inscribete Hoy!</NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem> */}
              {/* <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
