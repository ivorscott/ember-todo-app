import DS from 'ember-data';
import ENV from 'ember-todo-app/config/environment';
import Ember from 'ember';

import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
  namespace: ENV.APP.NAMESPACE,
  authorizer: 'authorizer:custom'
});
