import Ember from 'ember';
import { dateFormatter } from 'borrowers/utils/date-helpers';

export function formatDate([date, format]) {
  return dateFormatter(date, format);
}

export default Ember.Helper.helper(formatDate);
