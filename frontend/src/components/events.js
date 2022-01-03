import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './events.css';
const axios = require('axios');

var URL = 'http://localhost:8000/api/';

      

class EventDesc extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        "bandnames": [],
        "loading": true,
      }
      console.log(this.props)
    }
    fetchBandName = () =>{
      axios.get(URL+"query?id="+this.props.band_id)
      .then(res => {
        console.log(res.data);     
        this.setState({"bandnames": res.data, loading:false});   
      })
    
    }
    componentDidMount(){
      this.fetchBandName();
    }
    render(){
      console.log(this.state)
        return this.state.loading?  this.state.loading: (
          <div className="card" width="25rem" > 
         <a className="card-block stretched-link text-decoration-none" href="http://google.com">
          <h5 className="card-title">{this.props.name}</h5>({this.props.date})
          <p className="card-text">
            {this.state.bandnames.map((item)=> (<a key={item.name}>{item.name} </a>))}
          </p>
          </a>
          </div>
          
        )
    } 
  };
  class EventList extends React.Component{
    constructor(props){
      super(props);
      this.state={
        bands: [],
        loading:true
      }
    }
    
    componentDidMount(){
      this.fetchData();
    }
  
    fetchData = () =>{
      axios.get(URL+"events/")
      .then(res => {
        console.log(res.data);     
        this.setState({"events": res.data, loading:false});   
      })
    
    }
    grouping_state(data){
        // this gives an object with dates as keys
        const groups = data.reduce((groups, event) => {
            const date = event.date.split('T')[0];
            if (!groups[date]) {
            groups[date] = [];
            }
            groups[date].push(event);
            return groups;
        }, {});
        
        // Edit: to add it in the array format instead
        const groupArrays = Object.keys(groups).map((date) => {
            return {
            date,
            events: groups[date]
            };
        });
        return groupArrays
    }

    render(){
      console.log(this.state.events);
      const { events, loading } = this.state;
      loading? console.log("n"): console.log(this.grouping_state(events));
      loading? console.log("n"): 
      console.log(this.grouping_state(events).map(
        (item) => (console.log(item.date)))
        );
      return (loading ? <p>Loading...</p> :
      this.grouping_state(events).map(
        (item) => (
        <div key={item.date}>
        <h1 key={item.date}>{item.date}</h1>
        { item.events.map((event) =>(
          <EventDesc key={event.id} {...event}></EventDesc>))}
        </div>
      )
      )
      )
    }
  }
  

  export {EventList};