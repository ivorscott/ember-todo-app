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
    update(todo, method) {
        switch(method) {
          case 'edit':
            todo.set('text', todo.text);
            todo.save();
            break;
          case 'delete':
            todo.destroyRecord();
        }
    }
  }
});
