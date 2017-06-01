import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <div>
            <a hef="index.html">Mães no ENEM</a>
          </div>
          <div>
            <ul>
              <li>Início</li>
              <li>Mapa</li>
              <li>Colabore</li>
            </ul>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
