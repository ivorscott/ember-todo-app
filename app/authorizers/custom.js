import Base from 'ember-simple-auth/authorizers/base';
import Ember from 'ember';

export default Base.extend({
  session: Ember.inject.service(),
  authorize(data, callback) {
    if (this.get('session.isAuthenticated') && (data.token.length > 0)) {
      callback('x-auth', data.token);
    }
  }
});
