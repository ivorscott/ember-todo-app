import Ember from 'ember';

export default Ember.Component.extend({
  text: null,

  actions: {
    onEnter(text) {
      this.set('text', "");
      this.get('add')(text);
    }
  }

});
