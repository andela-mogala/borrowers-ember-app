import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('friend', params.friend_id);
  },

  resetController(controller, isExiting) {
    if(isExiting) {
      controller.get('model').rollback();
    }
  }
});
