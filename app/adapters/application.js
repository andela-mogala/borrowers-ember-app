import DS from 'ember-data';
import config from 'borrowers/config/environment';

export default DS.JSONAPIAdapter.extend({
  host: config.host
});
