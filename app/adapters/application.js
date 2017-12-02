import DS from 'ember-data';
import ENV from 'ember-todo-app/config/environment';
import Ember from 'ember';

import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.RESTAdapter.extend(DataAdapterMixin, {
  session: Ember.inject.service(),
  namespace: ENV.APP.NAMESPACE,
  authorizer: 'authorizer:custom'
});
