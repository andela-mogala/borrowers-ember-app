import dateHelpers from 'borrowers/utils/date-helpers';
import { module, test } from 'qunit';

module('Unit | Utility | date helpers');

// Replace this with your real tests.
test('formats a date object', function(assert) {
  const date = new Date('11-3-2014');
  let result = dateHelpers([date, 'ddd MM DD YYYY']);

  assert.equal(result, 'Mon Nov 03 2014', 'returns a readable string');
});
