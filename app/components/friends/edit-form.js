import Ember from 'ember';

const { computed: { notEmpty, and } } = Ember;

export default Ember.Component.extend({
  hasEmail: notEmpty('model.email'),
  hasFirstName: notEmpty('model.firstName'),
  hasLastName: notEmpty('model.lastName'),
  hasTwitter: notEmpty('model.twitter'),
  isValid: and('hasFirstName', 'hasLastName', 'hasEmail', 'hasTwitter'),

  actions: {
    save() {
      if(this.get('isValid')) {
        this.get('model').save()
          .then((friend) => this.save(friend))
          .catch(() => {
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
