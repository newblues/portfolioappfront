import React, { Component } from 'react';
import './App.css';
import './animate.css';
import NavBar from './components/Navbar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Resume from './components/Resume';
import PortfolioScreen from './components/portfolio/PortfolioScreen';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// REDUCERS
import projects from './Reducers/projects.reducer';

// REDUX
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
const store = createStore(combineReducers({ projects }));

class App extends Component {
  constructor(props) {
    super(props);

    // TOGGLE NAV BAR ON SCROLL
    var prevScrollpos = window.pageYOffset;

    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById('navbar').style.top = '0';
      } else {
        document.getElementById('navbar').style.top = '-5em';
      }
      prevScrollpos = currentScrollPos;
    };
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className='app'>
            <NavBar id='navbar' />
            <Home/>
            <AboutMe/>
            <PortfolioScreen/>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
