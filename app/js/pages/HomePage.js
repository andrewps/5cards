'use strict';

import React            from 'react';
import Reflux           from 'reflux';
import {Link}           from 'react-router';
import DocumentTitle    from 'react-document-title';
import BuildCard        from './BuildCard';
import CardThumbnail    from '../components/CardThumbnail';
import WelcomeMessage   from '../components/WelcomeMessage';
import HomePageStore    from '../stores/HomePageStore';

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
                <CardThumbnail title="Jackson Sux" slug="jackson-sux"/>
              </div>
            </div>
          </div>

        </section>
      </DocumentTitle>
    );
  }

}

export default HomePage;
