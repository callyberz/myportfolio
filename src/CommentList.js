//CommentList.js
import React, { Component } from 'react';
import Comment from './Comment';
import style from './style';

const CommentList = (props) => {
	const commentNodes = props.data.map(comment => (
		<Comment author = {comment.author} key={comment._id} text={comment.text}>
		</Comment>
		));
	return (
			<div>
			{commentNodes}
			</div>
		);
};

export default CommentList;