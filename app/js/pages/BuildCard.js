'use strict';

import React                       from 'react';
import {Link}                      from 'react-router';
import DocumentTitle               from 'react-document-title';
import IssueHeader                 from '../components/IssueHeader';
import FlipCard                    from 'react-flipcard';

var  max_chars = 160;


class BuildCard extends React.Component {

  // Character Count

  // getInitialState: function() {
  //   return {
  //       chars_left: max_chars
  //     };
  // },
  handleChange(event) {
    var input = event.target.value;
    this.setState({
      chars_left: max_chars - input.length
    });
  }


  // Flip Card
  constructor(props) {
    super(props)
    this.state = { 
      isFlipped: false,
      chars_left: max_chars
    }
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

            <IssueHeader value={this.props.routeParams.slug}></IssueHeader>

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
                      <form id="writeMessage" className="form">
                        <div className="row">
                          <div className="col-sm-6">
                            <label>Type your message here</label>
                          </div>
                          <div className="col-sm-6 end-xs">
                            <small>Characters Left: {this.state.chars_left}</small>
                          </div>
                        </div>
                        <div className="form-group">
                          <textarea 
                            onChange={this.handleChange.bind(this)}
                            className="form-control" 
                          />
                        </div>
                        <div className="form-group">
                          <label>Sincerly,</label>
                          <input className="form-control" type="text" id="signature" />
                        </div>
                      </form>
                    </div>
                    <div className="col-sm-4">
                      <div className="stamp-area"></div>
                    </div>
                </div>
              </div>
              <div className="card-back">
                <div className="btn btn-black btn-flip-card" type="button" ref="backButton" onClick={this.showFront.bind(this)}>Flip Card</div>
              </div>
            </FlipCard>

            <div className="next-steps text-center">
              <h3>Next, choose who you will send this card to.</h3>
              <Link to="/choose-reps" className="btn btn-lg btn-salmon">Select This Card</Link>
            </div>
          </div>


        </section>
      </DocumentTitle>
    );
  }

}

export default BuildCard;
