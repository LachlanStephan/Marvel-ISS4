// import './node_modules/bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './features/header';
import Main from './features/main';
import Footer from './features/footer';
import React from "react";
import Heroes from './pages/page1';
import Comics from './pages/page2';
import Featured from './pages/page3';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export function Links() {
  return (
    <Router>
      <div className="linksWrapper">
        <nav>
          <ul>
            <li>
              <Link to="/Heroes">Heroes</Link>
            </li>
            <li>
              <Link to="/Comics">Comics</Link>
            </li>
            <li>
              <Link to="/Featured">Featured</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Heroes">
            <Heroes />
          </Route>
          <Route path="/Comics">
            <Comics />
          </Route>
          <Route path="/Featured">
            <Featured />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Links />
      <Footer />
   </div>
  );
}

export default App;
