'use strict';

import React                       from 'react';

class YourReps extends React.Component{

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>Tell us your location and we will find your local representatives.</p>
        <form>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Street Address"/>
          </div>
          <div className="form-group">
          <div className="row">
            <div className="col-sm-6"><input type="text" className="form-control" placeholder="City"/></div>
            <div className="col-sm-3"><input type="text" className="form-control" placeholder="State"/></div>
            <div className="col-sm-3"><input type="text" className="form-control" placeholder="Zip Code"/></div>
          </div>
          </div>
          <button className="btn btn-teal">Find My Reps</button>
        </form>
      </div>
    );
  }

}

export default YourReps;
