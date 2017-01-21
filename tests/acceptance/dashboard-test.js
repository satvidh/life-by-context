import { test } from 'qunit';
import moduleForAcceptance from 'life-by-context/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | dashboard');

test('should redirect to dashboard route', function (assert) {
  visit('/');
  andThen(function() {
    assert.equal(currentURL(), '/dashboard', 'should redirect automatically');
  });
});

test('should list entries meant to be listed on the dashboard', function (assert) {
    // server is a global that is accessible on window.
    // This uses mirage factories to create the 
    window.server.createList('dashboard', 2);
    visit('/');
    andThen(function () {
      assert.equal(find('.dashboard-entry').length, 2, 'should see 2 entries');
      assert.equal(find('.dashboard-entry:first').text(), "entry 1", 'should display entry text');
    });
});
