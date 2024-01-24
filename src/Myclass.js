import React, { Component } from 'react'

export default class Myclass extends Component {
    constructor(props){
        super(props);
        this.state ={
            message:"Hello"
        };
    }
    handleClick =() =>{
        this.setState({
            messsage:"button click"

        });
    }
    render(){
  return (
    <div>
        <h1>
            {this.state.message}
        </h1>
        <button onClick = {this.handleClick}><h1>😊.. </h1></button>
    </div>
  )
}
}