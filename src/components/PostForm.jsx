import React, { Component } from 'react'

export default class PostForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: "",
            body: ""
        }
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit = (e) => {
        console.log(e);
        e.preventDefault();

        const post = { 
            title: this.state.title,
            body: this.state.body
        }
        fetch('https://jsonplaceholder.typicode.com/posts',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(post)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

  render() {
    return (
      <div>
        <h1> Post </h1>
            <form onSubmit={this.onSubmit}>
                <label> Title</label>
                <input type="text" name="title"  value={this.state.title} onChange={this.onChange}/>
                <br/>
                <label> Body </label>
                <input type="text" name="body" value={this.state.body} onChange={this.onChange} />
                <br/>
                <button > Submit </button>
            </form>
      </div>
    )
  }
}
