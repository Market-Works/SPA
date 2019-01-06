import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import logo from './logo.svg'
import './App.css'
import { Button } from 'reactstrap'

class Header extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome to <code> MarketWorks</code>.
          </p>
          <a className="App-link" href="https://www.facebook.com/Cr0wdArt/?modal=admin_todo_tour" target="_blank" rel="noopener noreferrer">
            Facebook Messenger Chatbot
          </a>
        </header>
      </div>
    )
  }
}

export default Header


/** 
import React, { Component } from 'react'
//import { Menu, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class MenuExampleInvertedSecondary extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Segment inverted>
        <Menu inverted pointing secondary>
        <Link to={'/'}>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
        </Link>
        <Link to={'/about'}>
          <Menu.Item
            name='about'
            active={activeItem === 'about'}
            onClick={this.handleItemClick}
          />
          </Link>
          <Link to={'/shop'}>
          <Menu.Item
            name='shop'
            active={activeItem === 'shop'}
            onClick={this.handleItemClick}
          />
          </Link>
        </Menu>
      </Segment>
    )
  }
}

/** 
import React from 'react';
import { Link } from 'react-router-dom';

return (
const Header = () => {
        <nav>
            <div className="nav-wrapper">
                <Link to={'/'} className="brand-logo">Menu</Link>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><Link to={'/shop'}>Shop</Link></li>
                    <li><Link to={'/about'}>About us</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
*/