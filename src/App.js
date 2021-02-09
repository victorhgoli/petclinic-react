import React from "react";
import { Container, Nav, Navbar } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Link, Route, Switch,
  useParams, useRouteMatch
} from "react-router-dom";
import Pet from "./components/pet/Pet";

import About from './components/about/About'
import Home from './components/home/Home'
import Login from "./components/login/Login";
import SignUp from "./components/signup/SignUp";


export default function App() {
  return (
    <Container fluid>

      <Router>
        <Nav
          activeKey="/home"
        >
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/signUp">SignUp</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/topics">topics</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/pets">pets</Nav.Link>
          </Nav.Item>
        </Nav>

        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signUp">
            <SignUp/>
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/pets">
            <Pet />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router >
    </Container>
  );
}





function Topics() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}