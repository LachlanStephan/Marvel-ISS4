// import './node_modules/bootstrap/dist/css/bootstrap.css'; Put any other
// imports below so that CSS from your components takes precedence over default
// styles.
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './components/common/header';
import Footer from './components/common/footer';
import React from "react";
import Heroes from './components/pages/Heroes';
import Comics from './components/pages/Comics';
import Featured from './components/pages/Featured';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {Container, Row, Col} from 'reactstrap';

export function Links() {
    return (
        <Router>
            <Container className="linksContainer">
                <Row>
                    <Col>
                        <Link to="/Heroes">Heroes</Link>
                    </Col>

                    <Col>
                        <Link to="/Comic" autofocus="true">Comics</Link>
                    </Col>

                    <Col>
                        <Link to="/Featured">Featured</Link>
                    </Col>
                </Row>
            </Container>
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
                <Route path="/Heroes">
                    <Heroes/>
                </Route>
                <Route path="/Comics">
                    <Comics/>
                </Route>
                <Route path="/Featured">
                    <Featured/>
                </Route>
                <Route path="*" component = {Comics}>

                </Route>
            </Switch>
        </Router>
    );
}

function apiCall() {
  fetch('http://gateway.marvel.com/v1/public/comics?apikey=f0b6fb5f90e9139ed2f1514d0139fb' +
              '15&ts=1&hash=ccb8f319be84ea5586be53927142ff35')
      .then(response => response.json())
      .then(response => console.log(response));
    
}

function App() {
    return (
        <div className="App">
            <Header/>
            <Links/> {apiCall()}
            <Footer/>
        </div>
    );
}

export default App;
