'use strict';

import React                       from 'react';
import {Link}                      from 'react-router';
import DocumentTitle               from 'react-document-title';
import IssueHeader                 from '../components/IssueHeader';

class ConfirmationPage extends React.Component {
  
  render() {
    return (
      <DocumentTitle title="Confirmation Page">
        <section className="confimation">

          <div className="wrap">
            <div className="page-header">
            <div className="row middle-xs">
              <div className="col-xs-8">
                <h1>Success</h1>
                <p className="lead">Your postcards have been sent!</p>
              </div>
              <div className="col-xs-4">
                <div className="row end-xs">
                  <div className="col-sm-6">
                    <a href="#" className="btn btn-sm btn-block btn-facebook">Share on Facebook</a>
                  </div>
                  <div className="col-sm-6">
                    <a href="#" className="btn btn-sm btn-block btn-twitter">Share on Twitter</a>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <hr/>            
          
          </div>


        </section>
      </DocumentTitle>
    );
  }

}

export default ConfirmationPage;