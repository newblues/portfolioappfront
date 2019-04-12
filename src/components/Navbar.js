import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import { HashLink as Link } from 'react-router-hash-link';
import * as Scroll from 'react-scroll';
// import { Link, animateScroll as scroll } from "react-scroll";
import { HashLink as Link } from 'react-router-hash-link';

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
              <NavLink>
                <Link to='/#home'>Home</Link>
                </NavLink>
              </NavItem>
              <NavItem>
              <NavLink>
                <Link to='/#aboutme'>About Me</Link>
                </NavLink>
              </NavItem>
              <NavItem>
              <NavLink>
                <Link to='/#portfolio'>Portfolio</Link>
                </NavLink>
              </NavItem>
      
            </Nav>
          </Collapse>
        </Navbar>

    );
  }
}

export default NavBar;
