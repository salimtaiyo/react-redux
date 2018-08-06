import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postAction';

export class Posts extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.newPost){
      this.props.posts.unshift(nextProps.newPost);
    }
  }
  render() {
    const postItem = this.props.posts.map( (item) => {
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

const mapStateToProps = state => ( { 
  posts: state.posts.items,
  newPost: state.posts.item

})


export default connect(mapStateToProps, { fetchPosts })(Posts);
