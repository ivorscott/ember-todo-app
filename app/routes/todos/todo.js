import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return {text: "this is a todo"};
  }
});
