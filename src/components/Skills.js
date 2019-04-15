import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ScrollAnimation from 'react-animate-on-scroll';

import '../App.css';

class Skills extends Component {
  render() {
    return (
      <div style={style.container} id='skills'>
        <Container>
        <Row>
          <Col xs='12' className='text-center'>
            <h3 className='sectionTitle'>Compétences</h3>
          </Col>
        </Row>
          <Row>
            <Col style={style.col} xs='12' sm='4'>
              <ScrollAnimation animateIn='bounceIn'>
                <img
                  style={style.logo}
                  src={require('../images/coding.svg')}
                  alt='Logo'
                />
              </ScrollAnimation>
              
              <h4 className='sectionSubtitle'>Front-End</h4>
              <p style={style.p}>React and Redux</p>
              <p style={style.p}>JavaScript(es6), JQuery</p>
              <p style={style.p}>HTML5</p>
              <p style={style.p}>CSS, Sass</p>
            </Col>
            <Col style={style.col} xs='12' sm='4'>
            <ScrollAnimation animateIn='bounceIn'>
                <img
                  style={style.logo}
                  src={require('../images/database.svg')}
                  alt='Logo'
                />
              </ScrollAnimation>
              <h4 className='sectionSubtitle'>Back-End</h4>
              <p style={style.p}>NodeJS, Express</p>
              <p style={style.p}>API Rest</p>
              <p style={style.p}>MongoDb</p>
              <p style={style.p}>Cloudinary</p>
            </Col>
            <Col style={style.col} xs='12' sm='4'>
            <ScrollAnimation animateIn='bounceIn'>
                <img
                  style={style.logo}
                  src={require('../images/settings.svg')}
                  alt='Logo'
                />
              </ScrollAnimation>
              <h4 className='sectionSubtitle'>Build Tool</h4>
              <p style={style.p}>Npm, Yarn</p>
              <p style={style.p}>Webpack, Babel</p>
              <p style={style.p}>Git, Git-GitHub</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const style = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Montserrat'
  },
  col: {
    display: 'flex', 
    flexDirection: 'column',
    alignItems: 'center'
  },
  logo: {
    width: 50,
    margin: '0px 0px 20px 0px'
  },
  p: {
    margin: 0
  }
};

export default Skills;