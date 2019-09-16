import React from 'react';
import './App.css';
import Draggable from 'react-draggable';
import MapContainer from './MapContainer';
import Notice from './Notice';

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

export default App;
