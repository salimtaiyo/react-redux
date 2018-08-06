import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createPosts } from '../actions/postAction';

export class PostForm extends Component {
    state = {
        title: '',
        body:''
    }
    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault();
        const post = {
            title: this.state.title,
            body: this.state.body
        }
        this.props.createPosts(post);
    }
  render() {
    return (
        <div>
        <h1> Add Items </h1>
        <form>
          <div>
              <label> Title </label>
              <br/>
              <input type="text" name="title" onChange={this.onChange}/>
          </div>
          <div>
              <label> Body </label>
              <br/>
              <textarea name="body" onChange={this.onChange}/>
          </div>
          <button type="submit" onClick={this.onSubmit}> Submit </button>
        </form>
      </div>
    )
  }
}

export default connect(null, { createPosts })(PostForm);
