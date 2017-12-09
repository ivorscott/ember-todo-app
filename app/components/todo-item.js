import Ember from 'ember';

const {
  get,
} = Ember;

export default Ember.Component.extend({
  todo: null,
  text: null,
  isEditing: false,

  actions: {
    onEnter(text) {
      if (text) {
        this.toggleProperty('isEditing');
        let todo = get(this, 'todo');
        todo.set('text', text);
        this.get('edit')(todo);
      }
    },
    delete() {
      let todo = get(this, 'todo');
      this.get('delete')(todo);
    }
  }
});
