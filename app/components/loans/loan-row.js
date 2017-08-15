import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',
  actions: {
    save(loan) {
      this.save(loan);
    }
  }
});
