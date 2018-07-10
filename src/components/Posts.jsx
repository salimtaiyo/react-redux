import React, { Component } from 'react'

class Posts extends Component {
constructor(props){
    super(props);
    this.state = {
        posts: []
    }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => this.setState({ posts : data}))
    }
    
  render() {
    const postItems = this.state.posts.map(i => {
        return <div key = {i.id}>
                  <h1> {i.title}</h1>
                  <p> {i.body}</p>
                </div> 
      })
    return (
      <div>
        {postItems} 
      </div>
    )
  }
}


export default Posts;