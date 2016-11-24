import DS from 'ember-data';

export default DS.Model.extend({
	id_dish: DS.attr(),
	restaurant: DS.attr(),
	price: DS.attr(),
	name_dish: DS.attr(),
	description: DS.attr(),
	type_dish: DS.attr()
});