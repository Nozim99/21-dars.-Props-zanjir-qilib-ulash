import './App.css';
import React from 'react';
import Posts from './components/Posts'

export default class App extends React.Component {
  state = {
    posts: [
      { id: 1, name: "JavaScript" },
      { id: 2, name: "ReactJS" },
      { id: 3, name: "VueJS" }
    ]
  }

  handleSomething = ()=>{
    console.log('App.js setState updated');
  }

  render(){
    return(
      <div className="App">
        <Posts posts={this.state.posts} cb={this.handleSomething} />
      </div>
    )
  }
}
