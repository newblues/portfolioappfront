import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

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

const style={
  container:{
    fontFamily: 'Montserrat', 
    fontSize: '14px',
    fontWeight: 'bold',
    width: '100%',
    zIndex: '1000',
  }
}

class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state={
        isOpen: false
    };    
  }
    
 
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      
        <Navbar id='navbar' style={style.container} className='fixed-top' color="light" light expand="md">
          <NavbarBrand href="/">〈 A.S	〉</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Profile</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Resume</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Portfolio</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

    );
  }
}

export default NavBar;
