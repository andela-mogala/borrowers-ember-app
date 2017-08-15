import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('article');
  },

  resetController(controller, isExiting) {
    if (isExiting) {
      const model = controlller.get('model');
      if (model.get('isNew')) {
        model.destroyRecord();
      }
    }
  }
});
