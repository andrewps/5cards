'use strict';

import React                       from 'react';
import DocumentTitle               from 'react-document-title';

const propTypes = {
  currentUser: React.PropTypes.object
};

class Donate extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <DocumentTitle title="Donate">
        <section className="donate-page">
          <div className="wrap">
            <h2>Donate to 9Cards</h2>
            <div className="row">
              <div className="col-sm-7">
                <p>The mission of Nautilus magazine is no less than to change science media. Rather than reducing and compartmentalizing, we expand and connect. Rather than dumbing down, we trust and educate. And it's working.</p> 
                <p>We're the first magazine to ever win two National Magazine Awards in our first year. In an era when print is supposed to be dying, our print circulation grows every year and today, with the help of our partners at MIT Press, reaches around the globe.</p> 
                <p>But this work isn't cheap. We rely on the generosity of our donors. Please help us continue to expand our community of readers and to maintain the highest quality science writing available today.</p> 
                <p>Donations of $1000 or more earn a free, lifetime print subscription! You can donate by phone (646-239-6858), email (donate@nautilusthink.org), mail (attn: John Steele, Suite 720, 233 Broadway, New York, NY 10279), or by filling out the form below. Nautilus is published by the nonprofit NautilusThink, and your contributions are fully tax-deductible to the extent allowed by law.</p>
              </div>
              <div className="col-sm-5">
                <img src="/images/pence.png"/>
              </div>
            </div>
          </div>
        </section>
      </DocumentTitle>
    );
  }

}

Donate.propTypes = propTypes;

export default Donate;


