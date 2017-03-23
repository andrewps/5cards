'use strict';

import React                       from 'react';

class SearchReps extends React.Component{

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form className="form">
          <div className="row">
            <div className="col-xs-8">
              <input type="text" className="form-control"/> 
            </div>
            <div className="col-xs-4">
              <button className="btn btn-teal">Search</button>
            </div>
          </div>
        </form>
      </div>
    );
  }

}

export default SearchReps;
