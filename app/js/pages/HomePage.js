'use strict';

import React                       from 'react';
import {Link}                      from 'react-router';
import DocumentTitle               from 'react-document-title';
import BuildCard                   from './BuildCard';
import CardThumbnail               from '../components/CardThumbnail';
import WelcomeMessage              from '../components/WelcomeMessage';

const propTypes = {
  currentUser: React.PropTypes.object
};

class HomePage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <DocumentTitle title="Home">
        <section className="home">

          <div className="pagebreak--light">
            <WelcomeMessage></WelcomeMessage>
          </div>

          <div className="wrap">
            <div className="row">
              <div className="col-sm-4">
                <CardThumbnail/>
              </div>
              <div className="col-sm-4">
                <CardThumbnail/>
              </div>
              <div className="col-sm-4">
                <CardThumbnail/>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4">
                <CardThumbnail/>
              </div>
              <div className="col-sm-4">
                <CardThumbnail/>
              </div>
              <div className="col-sm-4">
                <CardThumbnail/>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4">
                <CardThumbnail/>
              </div>
              <div className="col-sm-4">
                <CardThumbnail/>
              </div>
              <div className="col-sm-4">
                <CardThumbnail/>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4">
                <CardThumbnail/>
              </div>
              <div className="col-sm-4">
                <CardThumbnail/>
              </div>
              <div className="col-sm-4">
                <CardThumbnail/>
              </div>
            </div>
          </div>
        </section>
      </DocumentTitle>
    );
  }

}

HomePage.propTypes = propTypes;

export default HomePage;
