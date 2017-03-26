'use strict';

import React                       from 'react';
// import RepRow                      from '../../components/RepRow';

class BuildCart extends React.Component{

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="build-cart">
        <div><a href="#">&larr; Back to editing your card</a></div>
        <hr/>
        <p>Double check your cart before proceeding to payments:</p>        

        <div className="card-table">
          <div className="row middle-xs">
            <div className="col-xs-1"><button id="removeFromCart" className="btn btn-red btn-close">&times;</button></div>
            <div className="col-xs-7">5 Representatives</div>
            <div className="col-xs-4 text-right">$0.99</div>
          </div>
        </div>

      </div>
    );
  }

}

export default BuildCart;
