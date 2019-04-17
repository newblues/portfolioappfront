import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import colors from '../config.js';

import '../App.css';
import '../config.js';

import { connect } from 'react-redux';

const email = 'anto.sauvage@gmail.com';

class AboutMe extends Component {
  render() {
    const { language } = this.props;

    return (
      <div style={style.container} id='aboutme'>
        <Container>
          <Row>
            <Col xs='12' className='text-center'>
              {language == 'fr' ? (
                <h3 className='sectionTitle'>A propos</h3>
              ) : (
                <h3 className='sectionTitle'>About me</h3>
              )}
            </Col>
          </Row>

          <Row>
            <Col
              xs='12'
              sm='4'
              className='text-center flex-column justify-content-center'
            >
              <ScrollAnimation animateIn='bounceIn'>
                <img
                  style={style.logo}
                  src={require('../images/story.svg')}
                  alt='Logo'
                />
              </ScrollAnimation>
              <h4 className='sectionSubtitle'>
                {language == 'fr' ? 'Qui je suis' : 'About me'}
              </h4>
              <p>"Lore ehjfdkh gdm "</p>
            </Col>
            <Col xs='12' sm='4' className='text-center'>
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
              <h4 className='sectionSubtitle'>
                {' '}
                {language == 'fr' ? 'Informations' : 'Personal infomations'}
              </h4>
              <p style={style.infoText}>Nom : Antoine Sauvage</p>
              <p style={style.infoText}>Age : 35 ans</p>
              <p style={style.infoText}>Tel : 06 88 84 71 10</p>
              <p style={style.infoText}>
                Email : <a href={`mailto:${email}`}>anto.sauvage@gmail.com</a>
              </p>
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
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    marginBottom: 50,
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

function mapStateToProps(state) {
  return {
    language: state.language
  };
}

export default connect(
  mapStateToProps,
  null
)(AboutMe);
