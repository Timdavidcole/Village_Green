import React from 'react';
import './App.css';
import Draggable from 'react-draggable';
import MapContainer from './MapContainer';

function App() {

  return (
    <div className="app">
      <MapContainer />
      <Notices />
    </div>
  );
}

export class Notices extends React.Component {

  render() {
    return (
      <div className="tableNotice">
        <NoticeRow />
        <NoticeRow />
        <NoticeRow />
      </div>
    );
  }
}

export class NoticeRow extends React.Component {

  render() {
    return (
      <div>
        <Notice />
        <Notice />
        <Notice />
      </div>
    );
  }
}

function Notice() {

  // var randomCoordinate = function(){
  //   var r = [];
  //   var x = Math.floor( Math.random() * (window.innerWidth * 0.8) );
  //   var y = Math.floor( Math.random() * (window.innerHeight * 0.8));
  //   r = [x,y];
  //   return r;
  // };

  var number = Math.random()

  function style() {
    if (number < 0.25) {
      let style = {
        width: "300px",
        height: "205px",
        borderRadius: "10px",
        backgroundColor: "#ede2c2"
      };
      return style;
    }
    else if (number >= 0.25 && number < 0.5) {
      let style = {
        width: "270px",
        height: "215px",
        borderRadius: "20px",
        backgroundColor: "#f0ead8"
      };
      return style;
    }
    else if (number >= 0.5 && number < 0.75) {
      let style = {
        width: "350px",
        height: "210px",
        borderRadius: "5px",
        backgroundColor: "#f2f0e9"
      };
      return style;
    }
    else {
      let style = {
        width: "250px",
        height: "200px",
        borderRadius: "0px",
        backgroundColor: "#dbdad7"
      };
      return style;
    }
  }

  function styleCoordinates() {
    // var xy = randomCoordinate();
    let style = {
      // left: xy[0] + 'px',
      // top: xy[1] + 'px',
    }
    return style
  }

  return (
    <Draggable>
      <div className="card" style={styleCoordinates()}>
        <div className="card-inner" style={style()}>
          <h2 className="card-front" style={style()}>This is a Notice
          </h2>
          <div  className="card-back" style={style()}>
            <h3 className="card-title">My Notice</h3>
            <h6 className="card-subtitle mb-2">Something important (probably)</h6>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="card-link">Card link </a>
          </div>
        </div>
      </div>
    </Draggable>
  );

}

export default App;
