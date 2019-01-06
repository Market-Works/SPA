import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import { Button } from 'reactstrap'
import Header from './Header'
import HomePageLayout from './HomePageLayout'

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        </BrowserRouter>
        <HomePageLayout/>
      </div>
    )
  }
}

export default App
