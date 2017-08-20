import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    sortBy: { refreshModel: true },
    sortAscending: { refreshModel: true }
  },
  model(params) {
    let query = { include: 'loans,loans.article' };
    if (params.sortBy) {
      query.sort = params.sortBy;
      if(!params.sortAscending) {
        query.sort = `-${query.sort}`;
      }
    }
    return this.store.query('friend', query);
  }
});
