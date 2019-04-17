import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import colors from '../config.js';

import '../App.css';
import '../config.js';

class AboutMe extends Component {
  render() {
    return (
      <Container id='aboutme' style={style.container}>
        <Row>
          <Col xs='12' className='text-center'>
            <h3 className='sectionTitle'>A propos</h3>
          </Col>
        </Row>

        <Row>
          <Col xs='12' md='4' className='text-center'>
            <ScrollAnimation animateIn='bounceIn'>
              <img
                style={style.logo}
                src={require('../images/story.svg')}
                alt='Logo'
              />
            </ScrollAnimation>
            <h4 className='sectionSubtitle'>Qui je suis</h4>
            <p>
              "Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer. Lorem Ipsum is
              simply dummy text of the printing and typesetting industry."
            </p>
          </Col>
          <Col xs='12' md='4' className='text-center'>
            <img
              className='shadow rounded rounded-circle'
              style={style.image}
              src={require('../images/as_square.jpg')}
              alt='Antoine'
            />
          </Col>
          <Col xs='12' md='4' className='text-center'>
            <ScrollAnimation animateIn='bounceIn'>
              <img
                style={style.logo}
                src={require('../images/resume.svg')}
                alt='Logo'
              />
            </ScrollAnimation>
            <h4 className='sectionSubtitle'>Informations</h4>
            <p style={style.infoText}>Nom : Antoine Sauvage</p>
            <p style={style.infoText}>Age : 35 ans</p>
            <p style={style.infoText}>Tel : 06 88 84 71 10</p>
            <p style={style.infoText}>Email : anto.sauvage@gmail.com </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

const style = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    marginBottom: 50,
    // minHeight: '50vh',

    fontFamily: 'Montserrat'
  },
  image: {
    borderRadius: '50%',
    width: 220,
    height: 220
  },
  infoText: {
    color: colors.greyColor,
    margin: '0 0 16 0',
    // padding: '13px 0px',
    borderBottom: 'solid #AB9B96 1px',
    textAlign: 'left'
  },
  logo: {
    width: 50,
    margin: '0px 0px 20px 0px'
  }
};

export default AboutMe;
