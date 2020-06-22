import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from '..src/pages/Home.js';
import { About } from '..src/pages/About.js';
import { Contact } from '..src/pages/contact.js';
import { NavigationBar } from '..src/pages/components/navbar.js';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <NavigationBar />
                <Layout>
                    <Router>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/about" component={About} />
                            <Route path="/contact" component={Contact} />
                        </Switch>
                    </Router>
                </Layout>
            </React.Fragment>

        );
    }
}