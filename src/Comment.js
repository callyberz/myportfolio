//Comment.js
import React, { Component } from 'react';
import style from './style';
import marked from 'marked';

const Comment = props => (
	<div>
		<img alt="user_image" src={'https://picsum.photos/70?random=${props.id}'} />
		<div>
			<h3>{props.author}</h3>
			<h5>{props.text}</h5>
		</div>
	</div>
	);


// class Comment extends Component {
//  rawMarkup() {
//  let rawMarkup = marked(this.props.children.toString());
//  return { __html: rawMarkup };
//  }

//  render() {
//  return (
//  <div style={ style.comment }>
//  <h3>{this.props.author}</h3>
//  <span dangerouslySetInnerHTML={ this.rawMarkup() } />
//  </div>
//  )
//  }
// }
export default Comment;