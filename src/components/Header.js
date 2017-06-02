import React, { Component } from 'react';
import main from '../styles/global.css';

class Header extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <div className="home-menu-titulo">
            <a hef="#">Mães no ENEM</a>
          </div>
          <ul className="home-menu-list">
            <li className="home-menu-list-item">Início</li>
            <li className="home-menu-list-item">Mapa</li>
            <li className="home-menu-list-item">Colabore</li>
          </ul>
        </header>
      </div>
    );
  }
}

export default Header;
