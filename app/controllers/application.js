import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  authenticator: 'authenticator:node-todo-api',
  actions: {
    signIn(user) {
      this.get('session').authenticate( this.get('authenticator'), user)
      .then(() => {
        this.transitionToRoute('index');
      })
      .catch((message) => {
        this.set('errorMessage', message);
      });
    },
    signOut() {
      this.get('store').unloadAll();
      this.get('session').invalidate();
      this.transitionToRoute('login');
    }
  }
});
