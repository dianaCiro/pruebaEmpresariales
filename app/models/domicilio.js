import DS from 'ember-data';

export default DS.Model.extend({
	address: DS.attr(),
	phone: DS.attr(),
	user_restaurant: DS.attr(),
	orders: DS.belongsTo('order')
	
});
