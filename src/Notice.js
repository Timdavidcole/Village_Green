import React from 'react';
import './App.css';
import Draggable from 'react-draggable';

function Notice() {

  var number = Math.random()

  function style() {
    if (number < 0.25) {
      let style = {width: "300px",height: "220px",borderRadius: "10px",backgroundColor: "#ede2c2"};
      return style;
    }
    else if (number >= 0.25 && number < 0.5) {
      let style = {width: "270px",height: "225px",borderRadius: "20px",backgroundColor: "#f0ead8"};
      return style;
    }
    else if (number >= 0.5 && number < 0.75) {
      let style = {width: "350px",height: "230px",borderRadius: "5px",backgroundColor: "#f2f0e9"};
      return style;
    }
    else {
      let style = {width: "250px",height: "235px",borderRadius: "0px",backgroundColor: "#dbdad7"};
      return style;
    }
  }




    return (
      <Draggable>
        <div className="card">
          <div className="card-inner" style={style()}>
            <div className="card-front" style={style()}>
              <h2>This is a Notice</h2>
            </div>
            <div  className="card-back" style={style()}>
              <h3 className="card-title">My Notice</h3>
              <h6 className="card-subtitle mb-2">Something important (probably)</h6>
              <p className="card-text">This is a thing that I think is important and people near me will want to know about!</p>
              <a href="#" className="card-link">External link</a>
              <a href="#" className="card-link">Discussion</a>
              <a href="#" className="card-link">Contact</a>
            </div>
          </div>
        </div>
      </Draggable>
    );

}

export default Notice;
