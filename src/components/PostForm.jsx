import React, { Component } from 'react'

export class PostForm extends Component {
    state = {
        title: '',
        body:''
    }
    onChange = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault();
        const post = {
            title: this.state.title,
            body: this.state.body
        }
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(post)
        })
        .then(res => res.json())
        .then(data => console.log(data));
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

export default PostForm
