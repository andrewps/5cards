'use strict';

import React                       from 'react';

class Footer extends React.Component{

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer>
        <hr/>
        <div className="wrap">
          <div className="row">          
            <div className="col-sm-6">
              <small>Copyright &copy; 2017 / <b>9Cards</b></small>
              <ul className="footer-links">
                <li><a href="#">Donate</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Instagram</a></li>
              </ul>
            </div>
            <div className="col-sm-6">
              <div className="carbon-footprint">
                <div className="row middle-xs">
                  <div className="col-sm-4 text-center icon">
                    <div><img src="/images/trees.png"/></div>
                    <small>c02-NEGATIVE</small>
                  </div>
                  <div className="col-sm-8">
                    <h3>9Cards is Carbon Negative</h3>
                    <small>We will donate trees and carbon offsets to combat any negative impact of printing and shipping a card.  <i>Environmentally, your card will actually do more good than harm.</i></small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
