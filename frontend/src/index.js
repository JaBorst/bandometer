import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import reportWebVitals from './reportWebVitals';
import {EventList} from './components/events'

class Grid extends React.Component{
  render(){
    return (
    <div className="container">
      <div className="row">
        <div className="col"/>
        <div className="col-8">
        <EventList id="2"/>
        </div>
        <div className="col">
        3 of 3
      </div>
    </div>
  
    </div>)
  }
}


ReactDOM.render(
  <React.StrictMode>
    <Grid />
    {/* <TicTacToe/> */}
  </React.StrictMode>,
  document.getElementById('root')
);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
