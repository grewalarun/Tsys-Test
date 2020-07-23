
import React, { Component } from "react";
import axios from 'axios';
import "./index.css";

export default class StockData extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      data:'', 
      loading:true,
      input:'',
      isData:''
     }
}


inputchangeHandle = (e) => {
  this.setState({
    input: e.target.value
  })
}

clickHandle = () => {
   axios({
    method: "GET",
    url:
      'https://jsonmock.hackerrank.com/api/stocks?date='+this.state.input,

  })
    .then((response) => {
      //  console.log(response)
      this.setState({
        data:response.data,
        
        isData:response.data.data.length
      });
    })
    .catch((error) => {
      console.log(error);
    });
}




// componentDidMount(){
//   axios({
//     method: "GET",
//     url:
//       'https://jsonmock.hackerrank.com/api/stocks'

//   })
//     .then((response) => {
//        console.log(response)
//       this.setState({
//         data:response,
//         loading:false
//       });
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }

  render() {

    
    return (
      <div className="layout-column align-items-center mt-50">
        <section className="layout-row align-items-center justify-content-center">
          <input type="text" className="large" placeholder="5-January-2000" id="app-input" onChange ={this.inputchangeHandle} data-testid="app-input"/>
          <button className="" id="submit-button" onClick={this.clickHandle} data-testid="submit-button">Search</button>
        </section>
        <ul className="mt-50 slide-up-fade-in styled" id="stockData" data-testid="stock-data" >

{this.state.isData===1?this.state.data.data.map(a=>
 <div key={a.open}><li className="py-10">Open : {
  a.close}
  </li><li className="py-10">Close: {
  a.open}
  </li>
  <li className="py-10">High: {
  a.open}
  </li>
  <li className="py-10">Low: {
  a.open}
  </li></div>
  
  
  
  ):'No Result'}


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
