'use strict';

import Reflux             from 'reflux';
import Actions            from '../actions/Actions.js';

let data = {
  cards: [{title: "Jackson Sux", path: "jackson-sux"},
    {title: "Phil Sux", path: "phil-sux"}]
};

const HomePageStore = Reflux.createStore({

  init() {
    this.listenTo(Actions.loadHomePage, this.loadData);
  },

  loadData() {
    this.trigger(data);
  }

});

export default HomePageStore;
