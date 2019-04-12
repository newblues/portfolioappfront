import React, { Component } from 'react';
import { FaAngleDoubleDown } from 'react-icons/fa';
import '../App.css';
import { HashLink as Link } from 'react-router-hash-link';



const style = {
  container: {
    position: 'relative',
    // height: 'calc(100vh - 50px)',
    height: '100vh',
    background:
      'linear-gradient(-225deg, rgba(0,101,168,0.6) 0%, rgba(0,36,61,0.6) 50%), url("https://picsum.photos/1000?image=756")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',


    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',

    fontFamily: 'Montserrat'
  },

  arrow: {
    position: 'absolute',
    bottom: '50px',
    fontSize: '25px',
    color: 'white'
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    paddingTop: '50px',
    paddingBottom: '50px',
    paddingRight: '50px',
    paddingLeft: '50px',
    borderBottom: '1px solid',
    borderTop: '1px solid'
  },
  vline: {
    position: 'absolute',
    top: '50px',
    width: '2px',
    height: 130,
    background: 'white',
    left: '50%',
    marginLeft: '-1px'
  }
};

const Home = () => {
  return (
    <div id='home'  style={style.container}>
      <div class='animated fadeInUp delay-0.8s' style={style.titleContainer}>
        <h1>ANTOINE SAUVAGE</h1>
        <h3>FULL-STACK DEVELOPER</h3>
      </div>
      <div style={style.arrow} class='animated fadeInDown delay-0.8s'>
        <div class='animated infinite pulse delay-0s' >
        <Link  to="/#aboutme"> <FaAngleDoubleDown /></Link>      
        </div>
      </div>
    </div>
  );
};

export default Home;
