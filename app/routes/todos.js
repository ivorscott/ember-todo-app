import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model() {
    return this.store.findAll('todo');
  },
  setupController(controller, model) {
    this._super(controller, model);
    controller.set('todos', model);
  },
  actions: {
    add(text) {
      Ember.debug(text);
      let todo = this.store.createRecord('todo', { text })
      todo.save()
    },
    edit(todo) {
      Ember.debug(todo);
      if(todo.get('hasDirtyAttributes')) {
        Ember.debug(JSON.stringify(todo.changedAttributes()));
        todo.save();
      }
    },
    delete(todo) {
      todo.destroyRecord();
    }
  }
});
