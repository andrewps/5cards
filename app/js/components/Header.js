'use strict';
import React                       from 'react';
import {Link}                      from 'react-router';

class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <div className="wrap flex">
          <div className="logo">
            <Link to="/">5Cards</Link>
          </div>
          <nav>
            <Link to="/">Donate</Link>
            <Link to="/">What is this?</Link>
            {/* <Link to="/search">Search</Link> */}
          </nav>
        </div>
      </header>
    );
  }

}

export default Header;
