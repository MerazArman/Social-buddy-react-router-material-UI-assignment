import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Component/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './Component/NotFound/NotFound';
import PostDetails from './Component/PostDetails/PostDetails';
import Header from './Component/Header/Header';


function App() {
  return (
    <div >
    <Header></Header>
    <Router>
      <Switch>
        <Route path="/home" >
        <Home> </Home>
        </Route>
        <Route path="/post/:postId" >
          <PostDetails></PostDetails>
        </Route>
        <Route exact path="/" >
        <Home> </Home>
        </Route>
        <Route path="*" >
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
