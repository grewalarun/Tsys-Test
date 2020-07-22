
import React, { Component } from "react";
import axios from 'axios';
import "./index.css";

export default class StockData extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      data:'', 
      loading:true,
      input:''
     }
}


inputchangeHandle = (e) => {
  this.setState({
    input: e.target.value
  })
}

clickHandle = () => {
  alert("sdsdsd")
}

componentWillUpdate(){
  axios({
    method: "GET",
    url:
      'https://jsonmock.hackerrank.com/api/stocks?date='+this.state.input,

  })
    .then((response) => {
      //  console.log(response)
      this.setState({
        data:response,
        loading:false
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

  render() {

      const data1 = this.state.data.data;
    console.log(data1);
    return (
      <div className="layout-column align-items-center mt-50">
        <section className="layout-row align-items-center justify-content-center">
          <input type="text" className="large" placeholder="5-January-2000" id="app-input" onChange ={this.inputchangeHandle} data-testid="app-input"/>
          <button className="" id="submit-button" onClick={this.clickHandle} data-testid="submit-button">Search</button>
        </section>
        <ul className="mt-50 slide-up-fade-in styled" id="stockData" data-testid="stock-data" >

{this.state.loading==false?data1.data.map(a=>
 <div><li className="py-10">Open : {
  a.close}
  </li><li className="py-10">Close: {
  a.open}
  </li></div>
  
  
  
  ):'Loading'}


{/* 
          <li className="py-10"></li>
          <li className="py-10"></li>
          <li className="py-10"></li>
          <li className="py-10"></li> */}
        </ul>
      <div className="mt-50 slide-up-fade-in" id="no-result" data-testid="no-result"></div>
      </div>
    );
  }
}
