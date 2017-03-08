'use strict';

import React                       from 'react';

class WelcomeMessage extends React.Component{

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="wrap">
          <div className="cta">
            <h1>5Cards lets you mail real post cards to US reps to demand action on issues that you care about.</h1>
            <a href="#">Read More →</a>
          </div>
        </div>
      </div>
    );
  }

}

export default WelcomeMessage;
