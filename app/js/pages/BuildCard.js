'use strict';

import React                       from 'react';
import {Link}                      from 'react-router';
import DocumentTitle               from 'react-document-title';
import IssueHeader                 from '../components/IssueHeader';
import FlipCard                    from 'react-flipcard';

class BuildCard extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = { isFlipped: false }
  }
  showBack() {
    this.setState({
      isFlipped: true
    });
  }
  showFront() {
    this.setState({
      isFlipped: false
    });
  }
  handleOnFlip(flipped) {
    if (flipped) {
      this.refs.backButton.getDOMNode().focus();
    }
  }
  handleKeyDown(e) {
    if (this.state.isFlipped && e.keyCode === 27) {
      this.showFront();
    }
  }
  
  render() {
    return (
      <DocumentTitle title="Build Card">
        <section className="build-card">

          <div className="wrap">
            
            <IssueHeader></IssueHeader>
            
            <hr/>
            
            <FlipCard
              disabled={true}
              flipped={this.state.isFlipped}
              onFlip={this.handleOnFlip}
              onKeyDown={this.handleKeyDown}
            >
              <div className="card-front">
                <div className="btn btn-black btn-flip-card" type="button" onClick={this.showBack.bind(this)}>Flip Card</div>                
                  <div className="row">
                    <div className="col-sm-8">
                      <form className="form">
                        <p>Type your message here</p>
                        <div className="form-group">
                          <textarea className="form-control"></textarea>
                        </div>
                        <div className="form-group">
                          <label>Sincerly,</label>
                          <input className="form-control" type="text" id="signature" />
                        </div>
                      </form>
                    </div>
                    <div className="col-sm-4">
                      stamp
                    </div>
                </div>
              </div>
              <div className="card-back">
                <div className="btn btn-black btn-flip-card" type="button" ref="backButton" onClick={this.showFront.bind(this)}>Flip Card</div>
              </div>
            </FlipCard>            

            <h2>Next, choose who you will send this card to.</h2>
            <Link to="/confirmation" className="btn btn-lg btn-teal">Select This Card</Link>
          
          </div>


        </section>
      </DocumentTitle>
    );
  }

}

export default BuildCard;