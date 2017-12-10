import Base from 'ember-simple-auth/authenticators/base';
import ENV from 'ember-todo-app/config/environment';
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
          url: ENV.TOKEN_END_POINT,
          type: 'POST',
          data: JSON.stringify({
              "data": {
                "attributes": {
                  "email": options.email,
                  "password": options.password
                }
              }
          }),
          contentType: 'application/vnd.api+json',
          dataType: 'json'
      }).then(function(response, status, jqXHR) {
        const {
          id,
          attributes
        } = response.data;

        resolve({
            token: jqXHR.getResponseHeader('x-auth'),
            accountId: id,
            email: attributes.email
        });
      }, function(xhr, /* status, error */) {
          var response = xhr.responseText;
          reject(response);
      });
    });
  },
  invalidate(/* data */) {
    return Ember.RSVP.resolve();
  }
});
