# ember-todo-app

[ember-todo-app](https://github.com/ivorscott/ember-todo-app) with ember-simple-auth is designed to work with [nodo-todo-api](https://github.com/ivorscott/node-todo-api)
, a NodeJS Express API that utilizes MongoDB. The API serializes & deserializes jsonapi payloads.

## Usage

* `npm i && bower i`
* `ember s --proxy http://localhost:4000`
* node-todo-api runs on port :4000 by default

### Configuration
Nothing is required to be changed if you use both apps together as is.

```javascript
// file: ember-todo-app/app/authenticators/node-todo-api.js

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
```
