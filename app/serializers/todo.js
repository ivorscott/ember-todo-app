import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  attrs: {
    user: '_creator'
  }
});
