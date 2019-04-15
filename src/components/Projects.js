import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../App.css';
import 'react-vertical-timeline-component/style.min.css';
import colors from '../config.js';


class Projects extends Component {
  render() {
    return (
      <div style={style.container}>
        <Container>
          <Row>
            <Col xs='12' sm='6' className='text-right timeline'>
              <h2 style={style.h1}>Lorem Ipsum</h2>
              <p>
                "Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry."
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
        backgroundColor: colors.silverColor,
        height: '100vh'
    }
  };
  

export default Projects;
