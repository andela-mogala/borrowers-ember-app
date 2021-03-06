import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save(friend) {
      this.transitionToRoute('friends.show', friend);
    },
    cancel() {
      this.transitionToRoute('friends');
    }
  }
});
