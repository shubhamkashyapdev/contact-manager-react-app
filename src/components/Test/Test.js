import React, { Component } from 'react'

class Test extends Component {
  state = {
    title:'',
    body:''
  }
  componentDidMount() {
    fetch
    ('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => this.setState({
      title: data.title,
      body: data.body
    }))
  }
  /*componentWillMount() {
    console.log("Test.js componentWilMount Not Supported Anymore..")
  }
  componentDidUpdate() {
    console.log("Test.js conponentDidUpdate..")
  }
  componentWillUpdate() {
    console.log("context.js componentWillUpdate Not Supported Anymore..");
  }
  
  static getDerivedStateFromProps(nextProps,nextState){
    return null;
  }

  componentWillReciveProps(nextProps,nextState) {
    console.log("Test.js componentWillReciveProps.. not work anymore..");
  }

  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log("Test.js getSnapshotBeforeUpdate...")
  }*/

  render() {
    const {title,body} = this.state;
    return (
      <div className="container">
        <h1>Test Component</h1>
        <hr></hr>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    )
  }
}


export default  Test;