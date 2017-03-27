'use strict';

import React                       from 'react';
import {Link}                      from 'react-router';

class Footer extends React.Component{

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer>
        <div className="wrap">
          <div className="row">         
            <div className="col-sm-6">
              <div className="row">
                <div className="col-sm-6">
                  <ul className="footer-links">
                    <li><Link to="/donate">Donate</Link></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contribute Art</a></li>
                  </ul>
                </div>
                <div className="col-sm-6">
                  <ul className="footer-links">  
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Twitter</a></li>
                    <li><a href="#">Instagram</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="carbon-footprint">
                <div className="row middle-xs">
                  <div className="col-sm-4 text-center icon">
                    <div><img src="/images/trees.png"/></div>
                    <small>c02-NEGATIVE</small>
                  </div>
                  <div className="col-sm-8">
                    {/* <h4>9Cards is Carbon Negative</h4> */}
                    <small>We will donate trees and carbon offsets to combat any negative impact of printing and shipping a card.  <i>Environmentally, your card will actually do more good than harm.</i></small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright">
            <div className="row">
              <small>Copyright &copy; 2017 / <b>9Cards</b></small>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
