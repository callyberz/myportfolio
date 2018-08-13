//Projects.js
import React, {Component} from 'react';

class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = { title: [],
		};
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/posts")
		.then(results => {
			return results.json();
		}).then(data => {
			console.log(data);
			var title = data.map((data) => {
				return(
					<div key={data.title}>
					{data.title}
					</div>
				)
			})
			this.setState({title: title});
		})
		.catch((error) => {
			console.log(error);
		});
	}

	render() {
		return(
			<div>
			<h1>Do some searching here: </h1>
			<form onSubmit={this.onSearch}>
			<input type="text" />
			<button type="submit">Search</button>
			</form>
			<h1>{this.state.title}</h1>
			</div>
	)}
};



export default Projects