import Ember from 'ember';

const {
  inject
} = Ember;

export default Ember.Component.extend({
  session: inject.service(),
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
