//AboutMe.js
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import style from './style';

const AboutMe = (props) => (
	<div>
	<Paper style={style.aboutmeMenu}>
	<Menu>
		<MenuItem href="http://www.facebook.com" target="_blank" primaryText="Facebook" />
		<MenuItem href="http://www.twitter.com" target="_blank" primaryText="Twitter" />
		<MenuItem href="http://www.tumblr.com" target="_blank" primaryText="Tumblr" />
		<MenuItem href="http://www.instagram.com" target="_blank" primaryText="Instagram" />
	</Menu>
	</Paper>
	</div>
);

export default AboutMe