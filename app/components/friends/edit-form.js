import Ember from 'ember';

const { computed, isEmpty } = Ember;

export default Ember.Component.extend({
  isValid: computed(
    'model.firstName',
    'model.lastName',
    'model.email',
    'model.twitter',
    function() {
      return !isEmpty(this.get('model.firstName')) &&
        !isEmpty(this.get('model.lastName')) &&
        !isEmpty(this.get('model.twitter')) &&
        !isEmpty(this.get('model.email'));
  }),

  actions: {
    save() {
      if(this.get('isValid')) {
        this.get('model').save()
          .then((friend) => this.save(friend))
          .catch((err) => {
            this.set('errorMessage', 'For some reason, the model did not save');
          });
      } else {
        this.set('errorMessage', 'You have to fill all the fields');
      }

    },
    cancel() {
      this.cancel(this.get('model'));
    }
  }
});
