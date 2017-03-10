import Ember from 'ember';

export default Ember.Component.extend({
  appName: "Ember Todo App",
  actions: {
    authenticate() {
      let { email, password } = this.getProperties('email', 'password');
      this.get('onSignIn')({ email, password });
    },
    invalidateSession() {
      this.get('onSignOut')();
    }
  }
});
