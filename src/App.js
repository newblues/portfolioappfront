import React, { Component } from 'react';
import './App.css';
import NavBar from './components/Navbar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Resume from './components/Resume';



class App extends Component {

  constructor(props) {
    super(props);

    // TOGGLE NAV BAR ON SCROLL
    var prevScrollpos = window.pageYOffset;

    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
      } else {
      document.getElementById("navbar").style.top = "-5em";
      }
    prevScrollpos = currentScrollPos;
    }
  };
   
  
    render() {


    return (
      <div>
        <NavBar id="navbar"/>
        <Home/>
        <AboutMe/>
        <Resume/>
      </div>
    );
  }
}

export default App;


