import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  articles: Ember.computed(function() {
    return this.get('store').findAll('article');
  }).readOnly(),

  actions: {
    cancel() {
      this.back(this.get('model.friend'));
    },
    save() {
      this.get('model').save()
        .then((loan) => {
          this.back(loan.get('friend'))
        })
        .catch(() => {
          this.set('errorMessage', 'There was something wrong saving the loan.');
        });
    }
  }
});
