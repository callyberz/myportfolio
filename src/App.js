import React, {Component} from "react";
import {BrowserRouter, Route, Link, Switch} from "react-router-dom";
import style from './style';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import AppBarMenu from './AppBarMenu';
import MainPage from './MainPage';
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Projects from "./Projects";
import Interests from "./Interests";
import CommentBox from "./CommentBox";
import NoMatch from "./NoMatch";

class App extends Component {
  render() {
    return(
      <MuiThemeProvider>
      <BrowserRouter>
      <div>
      <AppBarMenu />
    <div name='content' style={style.content}>
    <Switch>
    <Route exact path="/" component={MainPage} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={Projects} />
    <Route path="/interests" component={Interests} />
    <Route path="/comment" component={CommentBox} />
    </Switch>
    </div>
    <hr/>
  </div>
  </BrowserRouter>
  </MuiThemeProvider>);
  }
}

export default App;