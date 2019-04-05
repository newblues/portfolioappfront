import React, { Component } from "react";
import { FaAngleDoubleDown } from "react-icons/fa";
import "../App.css";

const style = {
  container: {
    position: 'relative',
    // height: 'calc(100vh - 50px)',
    height: "100vh",
    background:
      'linear-gradient(-225deg, rgba(0,101,168,0.6) 0%, rgba(0,36,61,0.6) 50%), url("https://picsum.photos/1000/?random")',
    backgroundSize: "cover",
    backgroundPosition: "center",

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",

    fontFamily: "Montserrat"
  },
  arrow: {
    position: "absolute",
    bottom: "50px",
    fontSize: "25px"
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    paddingTop: "50px",
    paddingBottom: "50px",
    paddingRight: "50px",
    paddingLeft: "50px",
    borderBottom: "1px solid",
    borderTop: "1px solid"
  },
  vline:{
    position: 'absolute',
    top: '50px',
    width: '2px',
    height: 130,
    background: 'white',
    left: '50%',
    marginLeft: '-1px',
  }
};

const Home = () => {
    return (
      <div style={style.container}>

        <div style={style.titleContainer}>
          <h1>ANTOINE SAUVAGE</h1>
          <h5>FULL-STACK DEVELOPER</h5>

        </div>
        <span style={style.arrow}>
          <FaAngleDoubleDown />
        </span>
      </div>
    );
}

export default Home;
