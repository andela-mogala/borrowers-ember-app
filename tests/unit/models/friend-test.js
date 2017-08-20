import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('friend', 'Unit | Model | friend', {
  // Specify the other units that are required for this test.
  needs: ['model:loan']
});

test('it exists', function(assert) {
  const model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});

test('fullName joins firstName and lastName', function(assert) {
  const model = this.subject({firstName: 'Mike', lastName: 'Doel'});
  assert.equal(model.get('fullName'), 'Mike Doel');

  Ember.run(function() {
    model.set('firstName', 'Patrick');
  });

  assert.equal(this.get('fullName'), 'Patrick Doel', 'updates fullName');
});

test('loans relationship', function(assert) {
  const klass = this.subject({}).constructor;
  const relationship = Ember.get(klass, 'relationshipsByName').get('loans');

  assert.equals(relationship.key, 'loans');
  assert.equal(relationship.kind, 'hasMany');
});