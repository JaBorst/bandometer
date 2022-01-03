import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
const axios = require('axios');

var URL = 'http://localhost:8000/api/';

      

class ClubDesc extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      "band": props.item,
    }
    console.log("props:");
    console.log(this.props);
  }
  render(){
      return (
        <div className="card" width="25rem" > 
       <a className="card-block stretched-link text-decoration-none" href="http://google.com">
        <h5 className="card-title">{this.props.name}</h5>({this.props.address})
        <p className="card-text">{this.props.genre}</p>
        {this.props.email}
        </a>
        </div>
      )
  } 
};

class ClubList extends React.Component{
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
    axios.get(URL+"clubs/")
    .then(res => {
      console.log(res.data);     
      this.setState({"bands": res.data, loading:false});   
    })
  
  }
  render(){
    console.log(this.state.bands);
    const { bands, loading } = this.state;
    return loading ? <p>Loading...</p> : 
    bands.map(item => (
      <BandDesc key={item.id} {...item}></BandDesc>
    ));
  }
}
