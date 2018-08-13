//Contact.js
import React from 'react';
import style from './style';
import { watchFile } from 'fs';

class Contact extends React.Component {
  constructor() {
    super()

    this.state = {
		email: '',
		password: ''
	}
	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
	this.handleClear = this.handleClear.bind(this);
  }

  handleChange(event) {
	this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
	  event.preventDefault();
	  alert('A name was submitted: ' + this.state.email + "with pw " + this.state.password);
	  this.handleClear(event);
  }

  handleClear(event) {
	  event.preventDefault();
	  this.setState({
		  email: '',
		  password: ''
	  });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Enter your info</h2>
        <label>
			Email
          <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
        </label>

		 <label>
			Password
          <input type="text" name="password" value={this.state.password} onChange={this.handleChange} />
        </label>

        <button type="submit" value="Submit" >Submit</button>
		<button type="clear" value="Clear" onClick={this.handleClear}>Clear</button>
      </form>
    )
  }
}

// const Contact = (props) => (
// 	<div style={style.contact}>
// 	<form >
// 	<label> Input your email address
// 	</label>
// 	<input type="text" value={this.state.value} />
// 	<button type="submit">Just Do It </button>
// 	</form>
// 	</div>
// );

export default Contact