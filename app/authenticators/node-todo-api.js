import Base from 'ember-simple-auth/authenticators/base';
import Ember from 'ember';

export default Base.extend({
  session: Ember.inject.service(),
  host: 'https://my-node-todo-api.herokuapp.com',
  tokenEndpoint: '/users/login',
  restore(data) {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      if (!Ember.isEmpty(data.token)) {
        resolve(data);
      } else {
        reject();
      }
    });
  },
  authenticate(options) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      Ember.$.ajax({
          url: `${this.get('host')}${this.get('tokenEndpoint')}`,
          type: 'POST',
          data: JSON.stringify({
              email: options.email,
              password: options.password
          }),
          contentType: 'application/json;charset=utf-8',
          dataType: 'json'
      }).then(function(response,status,jqXHR) {
          Ember.run(function() {
              resolve({
                  token: jqXHR.getResponseHeader('X-AUTH')
              });
          });
      }, function(xhr, status, error) {
          var response = xhr.responseText;
          Ember.run(function() {
              reject(response);
          });
      });
    });
  },
  invalidate(data) {
    return Ember.RSVP.resolve();
  }
});
