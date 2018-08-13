// AppBarMenu.js
import React, {Component} from 'react';
import {BrowserRouter, Route, Link, Switch} from "react-router-dom";
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import style from './style';

export default class AppBarMenu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
		};
	}

	handleToggle = (event) => {
		event.preventDefault();
		console.log(this.state.open);
		this.setState({open:!this.state.open });}

	handleClose = () => {
		this.setState({open: false});
	}

	render() {
		return (
			<div>
			<div>
			<AppBar title="Main Menu"
			onLeftIconButtonClick={this.handleToggle.bind(this)}
			/>
			</div>

			<Tabs>
			<Tab label="1"> </Tab>
			<Tab label="2"> </Tab>
			<Tab label="3"> </Tab>
			</Tabs>

			<div>
			<Drawer
			docked={false}
			width={200}
			open={this.state.open}
			onRequestChange={(open) => this.setState({open})}
			>
			<MenuItem onClick={this.handleClose} primaryText="Main page" containerElement={<Link to ="/" />} />
			<MenuItem onClick={this.handleClose} primaryText="About me" containerElement={<Link to ="/aboutme" />} />
			<MenuItem onClick={this.handleClose} primaryText="Contact" containerElement={<Link to ="contact" />} />
			<MenuItem onClick={this.handleClose} primaryText="Projects" containerElement={<Link to ="projects" />}/>
			<MenuItem onClick={this.handleClose} primaryText="Interests" containerElement={<Link to ="interests" />}/>
			<MenuItem onClick={this.handleClose} primaryText="Comment box" containerElement={<Link to ="comment" />}/>
			</Drawer>
			</div>
			</div>
			);
	}
}