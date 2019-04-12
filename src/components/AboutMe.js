import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../App.css';

class AboutMe extends Component {
  render() {
    return (
      <Container id='aboutme' style={style.container}>
        <Row>
          <Col xs='12' className='text-center'>
            <h1 style={style.titleSection}>About Me</h1>
          </Col>
        </Row>

        <Row>
          <Col xs='12' md='4' className='text-center'>
            <h3 style={style.subTitleSection}>My Story</h3>
            <p>
              "Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer. Lorem Ipsum is
              simply dummy text of the printing and typesetting industry."
            </p>
          </Col>
          <Col xs='12' md='4' className='text-center'>
            <img style={style.image} src={require('../images/as_square.jpg')} />
          </Col>
          <Col xs='12' md='4' className='text-center'>
            <h3 style={style.subTitleSection}>Personal Info</h3>
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
    marginTop: '50px',
    marginBottom: '50px',

    fontFamily: 'Montserrat'
  },
  titleSection: {
    marginBottom: '50px'
  },
  subTitleSection: {
    marginBottom: '25px'
  },
  image: {
    borderRadius: '50%',
    width: 250,
    height: 250
  },
  infoText: {
    color: '#95a5a6',
    margin: 0,
    padding: '13px 0px',
    borderBottom: 'solid #95a5a6 1px',
    textAlign: 'left'
  }
};

export default AboutMe;
