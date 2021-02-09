import React from 'react';
import { Nav } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Link, Route, Switch,
    useParams, useRouteMatch
} from "react-router-dom";
import About from './components/about/About';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Pet from './components/pet/Pet';
import SignUp from './components/signup/SignUp';

// import { Container } from './styles';

function Routes() {
    return (
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
                    <SignUp />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/pets">
                    <Pet />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router >
    );
}

export default Routes;