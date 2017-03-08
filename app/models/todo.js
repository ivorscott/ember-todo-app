import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr('string'),
  user: DS.belongsTo('user'),
  completedAt: DS.attr('date'),
  completed: DS.attr('boolean', { defaultValue: false })
});
