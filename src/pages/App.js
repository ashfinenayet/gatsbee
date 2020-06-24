import React from "react";
import { render } from "react-dom";
import { Router, Link, Redirect, Location } from "@reach/router";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "../styles/app.css";


const App = () => (
  <div className="app">
    <nav className="nav">
      <Link to="/">Home</Link>{" "}
      <Link to="page/2">Contact Me</Link>{" "}
      <Link to="page/3">About</Link>{" "}
    </nav>

    <FadeTransitionRouter>
      <Page path="/" page="1" />
      <Page path="page/:page" />
    </FadeTransitionRouter>
  </div>
);

const FadeTransitionRouter = props => (
  <Location>
    {({ location }) => (
      <TransitionGroup className="transition-group">
        <CSSTransition key={location.key} classNames="fade" timeout={500}>
          {/* the only difference between a router animation and
              any other animation is that you have to pass the
              location to the router so the old screen renders
              the "old location" */}
          <Router location={location} className="router">
            {props.children}
          </Router>
        </CSSTransition>
      </TransitionGroup>
    )}
  </Location>
);

const Page = props => (
  <div
    className="page"
    style={{ background: `hsl(${props.page * 75}, 60%, 60%)` }}
  >
    {props.page}
  </div>
);

export default App;