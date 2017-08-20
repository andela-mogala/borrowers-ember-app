import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),
  model() {
    this.store.query('friend', { include: 'loans,loans.article' });
  }
});
