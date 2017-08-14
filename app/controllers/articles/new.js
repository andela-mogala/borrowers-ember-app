import Ember from 'ember';

export default Ember.Controller.extend({
  save(article) {
    this.transitionToRoute('articles.show', article);
  },
  cancel(article) {
    this.transitionToRoute('articles');
  }
});
