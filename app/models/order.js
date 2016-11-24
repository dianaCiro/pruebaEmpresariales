import DS from 'ember-data';

export default DS.Model.extend({
	dish: DS.belongsTo('menu'),
	amount: DS.attr()
});
