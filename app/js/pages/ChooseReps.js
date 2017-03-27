'use strict';

import React                       from 'react';
import {Link}                      from 'react-router';
import DocumentTitle               from 'react-document-title';
// import StepZilla                   from 'react-stepzilla';
import IssueHeader                 from '../components/IssueHeader';
import BuildCart                   from '../components/BuildCart';
import KeyPeople                   from '../components/tabs/KeyPeople';
import YourReps                    from '../components/tabs/YourReps';
import SearchReps                  from '../components/tabs/SearchReps';
import { render } from 'react-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


class ChooseReps extends React.Component {
  handleSelect(index, last) {
    console.log('Selected tab: ' + index + ', Last tab: ' + last);
  }
  
  render() {
    return (
      <DocumentTitle title="Choose Reps">
        <section className="choose-reps">





          <div className="wrap">
            <IssueHeader></IssueHeader>
            
            <hr/>            
            <div className="row">
              <div className="col-xs-6">
                <div className="reps-tabs">
                  <Tabs
                    onSelect={this.handleSelect}
                    selectedIndex={2}
                  >
                    <TabList>
                      <Tab>Key People</Tab>
                      <Tab>Your Reps</Tab>
                      <Tab>Search</Tab>
                    </TabList>
                    
                    <TabPanel>
                      <KeyPeople/>
                    </TabPanel>
                    <TabPanel>
                      <YourReps/>
                    </TabPanel>
                    <TabPanel>
                      <SearchReps/>
                    </TabPanel>
                  </Tabs>
                </div>
              </div>
            
              <div className="col-xs-6">
                <BuildCart/>
              </div>
            
            </div>
          
          </div>

          <div className="next-steps text-center">
            <h3>Next, finalize payment and send cards.</h3>
            <Link to="/confirmation" className="btn btn-lg btn-salmon">Finalize & Send Cards</Link>
          </div>

        </section>
      </DocumentTitle>
    );
  }

}

export default ChooseReps;