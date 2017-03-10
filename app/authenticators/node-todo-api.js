import Base from 'ember-simple-auth/authenticators/base';
import Config from '../config/environment';
import Ember from 'ember';

export default Base.extend({
  session: Ember.inject.service(),
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
          url: Config.API_TOKEN_END_POINT,
          type: 'POST',
          data: JSON.stringify({
              email: options.email,
              password: options.password
          }),
          contentType: 'application/json;charset=utf-8',
          dataType: 'json'
      }).then(function(response,status,jqXHR) {
              resolve({
                  token: jqXHR.getResponseHeader('X-AUTH'),
                  accountId: response._id,
                  email: response.email
              });
      }, function(xhr, status, error) {
          var response = xhr.responseText;
          reject(response);
      });
    });
  },
  invalidate(data) {
    // TODO: (DELETE) with Config.API_TOKEN_KILL_POINT
    return Ember.RSVP.resolve();
  }
});
