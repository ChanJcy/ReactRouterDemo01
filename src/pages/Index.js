import React, { Component } from 'react'
import {BrowserRouter as Router,Route,Link,Redirect} from 'react-router-dom'

class Index extends Component {
  constructor(props){
    super(props)
    this.state={
      list:[
        {cid:1,title:'1'},
        {cid:2,title:'2'},
        {cid:3,title:'3'}
      ]
    }
    this.props.history.push("/home/")
  }
  render() { 
    return (  
      <div>
        {/* <Redirect to="/home/"/> */}
        <h2>12354</h2>
        <ul>
          {this.state.list.map(
            (item,index)=>{
              return(
                <li key={index+item}>
                  <Link to={'/list/'+item.cid}>
                    {item.title}
                  </Link>
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

export default Index;