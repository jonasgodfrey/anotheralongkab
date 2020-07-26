import React, { Component } from 'react'

export default class Users extends Component {
  // componentDidMount (){
  //   const script = document.createElement("script");
  //   script.src = 'js/content.js';
  //   script.async = true;
 
  //   document.body.appendChild(script);
  // }
        constructor(props){
          super(props);
          this.state={
            items:[],
            isLoaded:false,
          }
        }

        componentDidMount(){
          fetch('https://alongkab2.herokuapp.com/driver')
          .then(res=>res.json())
          .then(json=>{
            this.setState({
              isLoaded:true,
              items:json,
            })
          })
        }

    render() {
      
    return(
      <div>
      <p>hijklsdgkgkg</p>
      </div>
    )
    }
}
