import DS from 'ember-data';

export default DS.Model.extend({
	username: DS.attr(),
	email: DS.attr(),
	name: DS.attr(),
	role: DS.attr(),
	phone: DS.attr(),
	identification: DS.attr(),
	password: DS.attr(),
	passwordConfirmation: DS.attr()
});
