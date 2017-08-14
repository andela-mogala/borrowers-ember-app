import Ember from 'ember';

export default Ember.Component.extend({
  isValid: Ember.computed.notEmpty('model.name'),
  actions: {
    save() {
      if (this.get('isValid')) {
        this.get('model').save()
          .then((article) => {
            this.save(article);
          })
          .catch(err => {
            this.set('errorMessage', 'Article did not save for some reason');
          });
      } else {
        this.set('errorMessage', 'Please provide a name for the article');
      }
    },
    cancel() {
      this.cancel(this.get('model'));
    }
  }
});
