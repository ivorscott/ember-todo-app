import DS from 'ember-data';
import Ember from 'ember';

import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.RESTAdapter.extend(DataAdapterMixin, {
  session: Ember.inject.service(),
  host: 'https://my-node-todo-api.herokuapp.com',
  namespace: '',
  authorizer: 'authorizer:custom'
});
