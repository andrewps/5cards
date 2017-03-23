'use strict';

import React                       from 'react';

class RepRow extends React.Component{

  constructor(props) {
    super(props);
  }

  render() {
    return (        
      <div className="rep-row">
        <div className="row middle-xs"> 
          <div className="col-xs-2">
            <div className="face">
              <img src="http://bobewoldt.com/wp-content/uploads/2010/11/pat-toomey.jpg"/>
            </div>
          </div>
          <div className="col-xs-10">
            <strong>Pat Toomey</strong>
            <p>A quick blurb about Pat Toomey</p>
          </div>
        </div>
      </div>
    );
  }

}

export default RepRow;
