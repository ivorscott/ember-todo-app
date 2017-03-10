import DS from 'ember-data';
import Ember from 'ember';

export default DS.RESTAdapter.extend({
  session: Ember.inject.service(),
  host: 'https://my-node-todo-api.herokuapp.com',
  namespace: '',
  headers: Ember.computed('session.data.authenticated.token', function() {
    return {
      "X-AUTH": this.get('session.data.authenticated.token')
    };
  })
});
