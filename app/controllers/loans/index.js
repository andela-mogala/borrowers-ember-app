import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save(loan) {
      return loan.save();
    }
  }
});
