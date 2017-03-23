'use strict';

import React                       from 'react';
import {Link}                      from 'react-router';

class WelcomeMessage extends React.Component{
  render() {
    return (
      <div>
        <Link className="pick-card" to={"/c/" + this.props.slug}>
          <div className="card-meta">
            <label>{this.props.title}</label>
            <small>25 Cards Sent</small>
          </div>
          <div className="card-overlay"></div>
        </Link>
      </div>
    );
  }
}

export default WelcomeMessage;
