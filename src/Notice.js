import React from 'react';
import './App.css';
import Draggable from 'react-draggable';

function Notice() {

  var number = Math.random()

  function style() {
    if (number < 0.25) {
      let style = {width: "300px",height: "205px",borderRadius: "10px",backgroundColor: "#ede2c2"};
      return style;
    }
      else if (number >= 0.25 && number < 0.5) {
        let style = {width: "270px",height: "215px",borderRadius: "20px",backgroundColor: "#f0ead8"};
        return style;
      }
      else if (number >= 0.5 && number < 0.75) {
        let style = {width: "350px",height: "210px",borderRadius: "5px",backgroundColor: "#f2f0e9"};
        return style;
      }
      else {
        let style = {width: "250px",height: "200px",borderRadius: "0px",backgroundColor: "#dbdad7"};
        return style;
      }
    }

  function clickZoom() {

    function handleClick(e) {
      e.preventDefault();
      console.log('The link was clicked.');
    }

    return (<div className={btn_class} onClick={this.changeColor.bind(this)}>Button</div>)
  }

  return (
    <Draggable>
      <div className="card">
        <div className="card-inner" style={style()}>
          <div className="card-front" style={style()}>
            <h2>This is a Notice</h2>
          </div>
          {clickZoom()}<div className={card_class} onClick={clickZoom()} style={style()}>
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

export default Notice;
