import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Route, Switch, withRouter } from "react-router-dom";
import Home from '../Pages/Home/Home';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMapMarkedAlt, faClock, faCertificate, faShieldAlt, faUserShield } from '@fortawesome/free-solid-svg-icons';
import Navigation from '../Components/Navigation/Navigation';

library.add(faMapMarkedAlt, faClock, faCertificate, faShieldAlt, faUserShield);


class PagesContainer extends Component {
  render() {
    return (
        <Route render={({ location }) => (
          <div>
            <Navigation />
            <TransitionGroup className="transition-group">
                <CSSTransition 
                  key= {location.key}
                  timeout= {{enter: 300, exit: 300}}
                  classNames= 'fade'
                >
                <Switch location={location} className="route-section">

                  <Route exact path="/" component={Home} />
                  {/* <Route exact path="/services" component={Services} />
                  <Route exact path="/contact" component={Contact} /> */}
                </Switch>
                </CSSTransition>
            </TransitionGroup>
          </div>
           )} />
    );
  }
}

export default withRouter(PagesContainer);
