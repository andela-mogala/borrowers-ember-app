import { test } from 'qunit';
import moduleForAcceptance from 'borrowers/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | friends', {
  beforeEach() {
    server.createList('friend', 10);
  }
});

test('visiting /friends', function(assert) {
  visit('/friends');

  andThen(function() {
    assert.equal(currentURL(), '/friends');
    assert.equal(find('table tbody tr').length, 10, 'display 10 friends');
  });
});
