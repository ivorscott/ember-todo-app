import Ember from 'ember';

const {
  get
} = Ember;

export default Ember.Component.extend({
  actions: {
    update(method) {
      const todo = get(this, 'todo');
      this.get('update')(todo, method);
    }
  }
});
