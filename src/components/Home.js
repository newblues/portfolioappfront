import React, { Component } from 'react';
import { FaAngleDoubleDown } from 'react-icons/fa';
import '../App.css';
import { HashLink as Link } from 'react-router-hash-link';

const Home = () => {
  return (
    <div>
      <div id='home' style={style.container}>
        <div style={style.titleContainer}>
          <h1 className='animated fadeInLeft delay-0.8s' style={style.mainTitle}>
            ANTOINE SAUVAGE
          </h1>
          <h2 className='animated fadeInRight delay-0.8s' style={style.subTitle}>
            FULL-STACK DEVELOPPER
          </h2>
        </div>
      </div>
      <Link className='animated fadeInDown delay-0,8s' style={style.arrow} to='/#aboutme'>
        <FaAngleDoubleDown />
      </Link>
    </div>
  );
};

const style = {
  container: {
    position: 'relative',
    // height: 'calc(100vh - 50px)',
    height: '95vh',
    background:
      'linear-gradient(-225deg, rgba(0,101,168,0.6) 0%, rgba(0,36,61,0.6) 50%), url("https://picsum.photos/1000?image=20")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    clipPath: 'polygon(0 0, 100% 0, 100% 80vh, 0 100%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontFamily: 'Montserrat'
  },
  mainTitle: {
    fontSize: 36,
    fontWeight: 600,
    letterSpacing: 5,
  },
  subTitle: {
    fontSize: 17,
    fontWeight: 400,
    letterSpacing: 8,

  },
  arrow: {
    position: 'absolute',
    right: 50,
    bottom: 40,
    fontSize: '25px'
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

export default Home;
