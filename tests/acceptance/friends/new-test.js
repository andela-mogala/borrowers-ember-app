import { test } from 'qunit';
import moduleForAcceptance from 'borrowers/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | friends/new');

test('visiting /friends/new', function(assert) {
  visit('/friends/new');

  andThen(function() {
    assert.equal(currentURL(), '/friends/new');
  });
});

test('creating a new friend', function(assert) {
  visit('/');
  click('a[href="/friends/new"]');

  andThen(function() {
    assert.equal(currentPath(), 'friends.new');
  });

  fillIn('input[placeholder="First Name"]', 'Johnny');
  fillIn('input[placeholder="Last Name"]', 'Cash');
  fillIn('input[placeholder="Email"]', 'j@cash.com');
  fillIn('input[placeholder="Twitter"]', 'jcash');
  click('button[type="submit"]');

  andThen(function() {
    assert.equal(currentRouteName(), 'friends.show.index', 'Saves and redirects to friends.show')
  })
});

test('clicking save without filling the fields', function(assert) {
  visit('/friends/new');
  click('button[type="submit"]');

  andThen(function() {
    assert.equal(currentRouteName(), 'friends.new', 'stays on the same route');
    assert.equal(find('h2:contains(You have to fill all the fields)').length, 1, 'Displays error message');
  });
});