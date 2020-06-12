import React, { Component } from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'


class List extends Component {
  constructor(props){
    super(props)
    this.state={}
  }
  render() { 
    return (  
      <div>
        <h2>List->{this.state.id}</h2>
      </div>
    );
  }
  componentDidMount(){
    let tempId=this.props.match.params.id
    this.setState({id:tempId})
  }
}

export default List;