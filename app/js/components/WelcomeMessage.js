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
            <div className="row middle-xs">
              <div className="col-sm-9">
                <p className="caps">Welcome</p>
                <h3>5Cards lets you mail real post cards to US reps to demand action on issues that you care about.</h3>
              </div>
              <div className="col-sm-3 text-right">
                <a className="btn btn-teal" href="#">Read More →</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default WelcomeMessage;
