'use strict';

import React                       from 'react';
import RepRow                      from '../../components/RepRow';

class KeyPeople extends React.Component{

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>Here are the key people associated with this issue</p>
        
        <RepRow/>
        <RepRow/>
        <RepRow/>
        <RepRow/>
        <RepRow/>
        <RepRow/>
        <RepRow/>
        <RepRow/>


      </div>
    );
  }

}

export default KeyPeople;
