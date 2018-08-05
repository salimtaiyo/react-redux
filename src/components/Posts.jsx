import React, { Component } from 'react'

export class Posts extends Component {

  render() {
    const postItem = this.state.posts.map( (item) => {
      return(
        <div key={item.id}> 
          <h3> {item.title}</h3>
          <p> {item.body}</p>
        </div>
      )
    })
    return (
      <div>
        {postItem}
      </div>
    )
  }
}

export default Posts
