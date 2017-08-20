import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['sortBy', 'sortAscending'],
  sortAscending: true,
  sortBy: 'first-name',
  actions: {
    setSortBy(fieldName) {
      this.set('sortBy', fieldName);
      this.toggleProperty('sortAscending');
    },
    delete(friend) {
      friend.destroyRecord();
    }
  }
});
