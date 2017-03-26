'use strict';

import Reflux             from 'reflux';

const CurrentCardStore = Reflux.createStore({

  init() {
    this.card = null;

    this.listenTo(CurrentCardActions.setCardMessage, this.setCardMessage);
  },

  setCard(card) {
    this.card = card;
    this.trigger(null, this.card);
  },

  setCardMessage() {
    //
  },

});

export default CurrentCardStore;
