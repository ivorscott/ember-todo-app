import Base from 'ember-simple-auth/authorizers/base';
import Ember from 'ember';

export default Base.extend({
  authorize(jqXHR, requestOptions) {
    console.log(jqXHR);
    let accessToken = this.get('session.data.authenticated.token');
     if (this.get('session.isAuthenticated') && !Ember.isEmpty(accessToken)) {
         jqXHR.setRequestHeader('X-AUTH', accessToken);
     }
  }
});
