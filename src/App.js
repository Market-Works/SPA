import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import { Button } from 'reactstrap'
import Header from './Header'
import HomePageLayout from './HomePageLayout'
import Solutions from './client/js/components/Solutions'
import Company from './client/js/components/Company'
import Careers from './client/js/components/Careers'

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={HomePageLayout} />
            <Route exact path="/solutions" component={Solutions} />
            <Route exact path="/company" component={Company} />
            <Route exact path="/careers" component={Careers} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
