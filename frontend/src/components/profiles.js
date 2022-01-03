import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Calendar from 'react-calendar';
const axios = require('axios');

var URL = 'http://localhost:8000/api/';

      

class Profile extends React.Component{
  constructor(props){
    super(props);
    this.state={
      info: [],
      loading:true
    }
  }
  
  componentDidMount(){
    this.fetchData();
  }

  fetchData = () =>{
    axios.get(URL+"bands/"+this.props.id + "/")
    .then(res => {
      console.log(res.data);     
      this.setState({"info": res.data, loading:false});   
    })
  
  }
  render(){
    return(
      <div className="row">
    <div className="col">
      <h1>{this.state.info.name}</h1>
      <h5 style={{color: "grey"}}>{this.state.info.location}</h5>
    </div>
    <div className="col">
      <Calendar/>
    </div>
    </div>
  )
}
}
